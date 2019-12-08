<?php

namespace app\controllers;

use app\models\Users;
use yii\db\Exception;
use yii\rest\ActiveController;
use app\controllers\ApiBaseController;

class UserController extends ApiBaseController
{
    public $modelClass = 'app\models\Users';
	
	public function beforeAction($action)
	{
		\Yii::$app->response->headers->add('Access-Control-Allow-Headers', 'Authorization,DNT,Keep-Alive,User-Agent,X-CustomHeader,X-Requested-With,If-Modified-Since,Cache-Control,Range,Content-Type');
		return parent::beforeAction($action);
	}
    
    public function actions()
    {
        $actions = parent::actions();
        unset($actions['update'], $actions['create'], $actions['delete'], $actions['index'], $actions['view']);

        return $actions;
    }
	
	public function behaviors()
	{
		$behaviors = parent::behaviors();
		
		// add CORS filter
		$behaviors['corsFilter'] = [
			'class' => \yii\filters\Cors::className(),
			'cors' => [
				'Origin' => ['*'],
				'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
				'Access-Control-Request-Headers' => ['*'],
				'Access-Control-Allow-Credentials' => true,
				'Access-Control-Max-Age' => 86400,
				'Access-Control-Expose-Headers' => ['*'],
			],
		
		];
		
		return $behaviors;
	}
	
	public function actionIndex() {
    	$userId = \Yii::$app->request->get('id');
		if ($userId) {
			return Users::findOne($userId);
		} else {
			return Users::find()->all();
		}
    }
	
    public function actionUpdate(){
        $k = 0;

        try {
            $user = Users::find()->where(['userId'=>\Yii::$app->request->get('id')])->one();

            if (\Yii::$app->request->get('name') !== NULL) {
                $user->firstName = \Yii::$app->request->get('name');
                $k++;
            }
            if (\Yii::$app->request->get('lastname') !== NULL) {
                $user->lastName = \Yii::$app->request->get('lastname');
                $k++;
            }
            if (\Yii::$app->request->get('birthDate') !== NULL) {
                $user->birthDate = \Yii::$app->request->get('birthDate');
                $k++;
            }
            if (\Yii::$app->request->get('points') !== NULL) {
                $user->points = \Yii::$app->request->get('points');
                $k++;
            }
            if ($k == 0) {
                return "Не указаны данные для изменения";
            }

            $user->save();
            return "Ok";
        } catch (Exception $x) {
            return "Что то пошло не так $x";
        }
    }

    public function actionCreate() {
        return "Воспользуйтесь модулем аутенфикации";
    }

    public function actionDelete() {
        return "Воспользуйтесь модулем аутенфикации";
    }
    
}