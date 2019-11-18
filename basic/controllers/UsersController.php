<?php

namespace app\controllers;

use app\models\User;
use app\models\Users;
use yii\db\Exception;
use yii\rest\ActiveController;

class UsersController extends ActiveController
{
    public $modelClass = 'app\models\Users';

    public function behaviors()
    {

        return [
            [
                'class' => \yii\filters\ContentNegotiator::className(),

            ],
        ];
    }

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['update'], $actions['create'], $actions['delete']);

        return $actions;
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