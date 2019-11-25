<?php


namespace controllers;
use models\Tasks;
use yii\rest\Controller;

class TasksController extends Controller
{
    /**
     *
     * @return string
     */
    public function actionTasks()
    {
        $tasks = Tasks::find()
            ->all();

        return $this->renderTasks($tasks);
    }


}