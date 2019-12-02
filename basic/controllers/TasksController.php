<?php


namespace app\controllers;
use app\models\TaskTypes;
use app\models\Tasks;
use app\models\Words;
use app\models\Answers;
use app\models\AnswersType;
use yii\rest\ActiveController;

class TasksController extends ActiveController
{
    /**
     *
     * @return string
     */
    public function actionIndex()
    {
        $task_types = TaskTypes::find()
            ->all();

    }


}