<?php

namespace app\controllers;

use app\models\Users;
use yii\db\Exception;
use yii\rest\Controller;

class UsersController extends ApiBaseController
{
    public $modelClass = 'app\models\Users';

    public function actionView() {
        try{
        return Users::find()->where(['userId'=>\Yii::$app->request->get('id')])->one();
        } catch (\Exception $x) {
            return "Пользователь с таким ID не найден";
        }
    }


    public function actionIndex(){
        $rights = $this->checkToken();
        if ($rights == "Expired token") return "$rights";
        if ($this->checkToken()) {
            return Users::find()->orderBy('userId')->all();
        } else {
            return "У вас нет прав к данному контенту";
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
                $user->last_name = \Yii::$app->request->get('lastname');
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