<?php


namespace app\controllers;
use yii\web\Controller;


class TasksController extends Controller
{
    /**
     *
     * @return string
     */
    public function actionIndex()
    {
        $response = \Yii::$app->tasks->getTask(81);

        return $response;
    }


}