<?

namespace app\controllers;

use http\Exception\UnexpectedValueException;
use Yii;
use Firebase\JWT\BeforeValidException;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\SignatureInvalidException;
use yii\rest\ActiveController;
use yii\web\HttpException;
use yii\web\UnauthorizedHttpException;

class ApiBaseController extends ActiveController {
	
	public $headerAuthorization;
	
	public $role;
	
	/**
	 * {@inheritdoc}
	 */
	public function init()
	{
		parent::init();
		$this->headerAuthorization = Yii::$app->request->getHeaders()->get('Authorization');
	}
	
	public function behaviors()
	{
		return [
			[
				'class' => \yii\filters\ContentNegotiator::class,
				'formatParam' => '_format',
				'formats' => [
					'application/json' => \yii\web\Response::FORMAT_JSON,
					'xml'=>\yii\web\Response::FORMAT_XML,
				]
			],
		];
	}
	
	/**
	 * @param \yii\base\Action $action
	 * @return bool
	 * @throws UnauthorizedHttpException
	 */
	public function beforeAction($action)
	{
		if (!(Yii::$app->request->method == 'OPTIONS')) {
			$role = $this->checkToken();
			if ($role === false) {
				throw new UnauthorizedHttpException();
			}
			if (is_string($role)) {
				$this->role = $role;
			} else {
				$this->role = $role->role;
			}
		}

		return parent::beforeAction($action);
	}
	
	/**
	 * @return bool|object|string
	 * @throws UnauthorizedHttpException
	 */
	public function checkToken(){

		$key = Yii::$app->params['jwtKey'];
		$token = str_replace('Bearer ', '', Yii::$app->request->getHeaders()->get('Authorization'));
		if (!isset($token) || $token == '') {
			throw new UnauthorizedHttpException();
		} elseif ($token == 'null') {
			return 'gest';
		}
		$tokenarray = explode('.', $token);
		
		[$headb64, $bodyb64, $cryptob64] = $tokenarray;
		$sig = JWT::urlsafeB64Decode($cryptob64);
		$verifity = static::verify("$headb64.$bodyb64", $sig, $key,'HS256');
		if ($verifity) {
			try {
				$info = JWT::decode($token, $key, ['HS256']); // декодируем токен
				return $info;
			} catch (\Exception $e) {
				return false;
			}
		} else {
			throw new UnauthorizedHttpException();
		}
	}
	
	/**
	 * @param $msg
	 * @param $signature
	 * @param $key
	 * @param $alg
	 * @return bool
	 */
	private static function verify($msg, $signature, $key, $alg)
	{
		if (empty(JWT::$supported_algs[$alg])) {
			throw new DomainException('Algorithm not supported');
		}
		[$function, $algorithm] = JWT::$supported_algs[$alg];
		switch($function) {
			case 'openssl':
				$success = openssl_verify($msg, $signature, $key, $algorithm);
				if ($success === 1) {
					return true;
				} elseif ($success === 0) {
					return false;
				}
				// returns 1 on success, 0 on failure, -1 on error.
				throw new DomainException(
					'OpenSSL error: ' . openssl_error_string()
				);
			case 'hash_hmac':
			default:
				$hash = hash_hmac($algorithm, $msg, $key, true);
				if (function_exists('hash_equals')) {
					//                  return $hash;
					return hash_equals($signature, $hash);
				}
				$len = min(static::safeStrlen($signature), static::safeStrlen($hash));
				$status = 0;
				for ($i = 0; $i < $len; $i++) {
					$status |= (ord($signature[$i]) ^ ord($hash[$i]));
				}
				$status |= (static::safeStrlen($signature) ^ static::safeStrlen($hash));
				return ($status===0);
		}
	}
	
	private static function safeStrlen($str)
	{
		if (function_exists('mb_strlen')) {
			return mb_strlen($str, '8bit');
		}
		return strlen($str);
	}

}