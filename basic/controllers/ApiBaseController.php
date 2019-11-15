<?php


namespace app\controllers;

use Firebase\JWT\BeforeValidException;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\SignatureInvalidException;
use yii\rest\Controller;
use app\models\Users;

class ApiBaseController extends Controller
{
    public $modelClass = 'app\models\Users';

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['update'], $actions['create'], $actions['delete']);
        return $actions;
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

    public function checkToken(){
        $jwt = new JWT();
//      $req = Yii::$app->request->headers->get('token');
//      $req = Yii::$app->request->get('token');
        $req =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxYjUxYWEyOS1hYTA5LTRmOTgtOWJkYS0zMjJmODMzNTU3M2UiLCJ1c2VySWQiOiJlMDZlZDEyYS00OTYzLTQ1MTMtOGE4My00MmVlNTMxYTQyZjUiLCJlbWFpbCI6Ikhhb3RpazJAdGVzdC5qd3QiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTU3MzgwMTY5OSwiZXhwIjoxNTczODAyNTk5LCJpYXQiOjE1NzM4MDE2OTl9.A_KDbu6wfoAqGiQulFUaR7UYqU82K0UCyD0gq0dzUrY';

        $key = 'dktlb74jfvmtu3od8rhvn453bdey3a23';

        $token = str_replace('Bearer ', '', $req);
        $tokenarray = explode('.', $token);
        list($headb64, $bodyb64, $cryptob64) = $tokenarray;

        $sig = JWT::urlsafeB64Decode($cryptob64);
        $verifity = static::verify("$headb64.$bodyb64", $sig, $key,'HS256');


        if ($verifity) {
            $info = JWT::decode($token, $key, array('HS256')); // декодируем токен
            if (is_string($info)) return $info;
            if ((isset($info->role)) AND ($info->role != 'User')) return true; //проверка роли
            else return false;
        }
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