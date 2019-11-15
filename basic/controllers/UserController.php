<?php


namespace app\controllers;


use app\models\Users;
use yii\rest\ActiveController;
use Yii;
use \Firebase\JWT\JWT;
use \DomainException;

class UserController extends ActiveController
{

    public $modelClass = 'app\models\Users';


    public function actions()
    {
        $actions = parent::actions();
        unset($actions['index']);
        return $actions;
    }

    public function actionIndex(){
        $jwt = new JWT();
//        $req = Yii::$app->request->headers->get('token');
        $req = Yii::$app->request->get('token');
        $key = 'dktlb74jfvmtu3od8rhvn453bdey3a23';
        $token = str_replace('Bearer ', '', $req);
        $tokenarray = explode('.', $token);
        list($headb64, $bodyb64, $cryptob64) = $tokenarray;
        $sig = JWT::urlsafeB64Decode($cryptob64);
//        return static::verify("$headb64.$bodyb64", $sig, $key,'HS256');

      return JWT::decode($token, $key, array('HS256')); // это если надо декодировать токен

    }

    private static function verify($msg, $signature, $key, $alg)
    {
        if (empty(JWT::$supported_algs[$alg])) {
            throw new DomainException('Algorithm not supported');
        }

        list($function, $algorithm) = JWT::$supported_algs[$alg];
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