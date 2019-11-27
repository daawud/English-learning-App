<?php


namespace controllers;
use models\Task_types;
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
        $task_types = Task_types::find()
            ->andWhere(['answers_type' => true])
            ->with('tasks')
            ->with('answers')
            ->all();

        return $this->renderTask_types($task_types);
    }


}