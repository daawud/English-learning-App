<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "tasks".
 *
 * @property int $id
 * @property int $task_types_id
 *
 * @property Answers[] $answers
 * @property BunchLessonTasks[] $bunchLessonTasks
 * @property TaskTypes $taskTypes
 */
class Tasks extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{tasks}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['task_types_id'], 'required'],
            [['task_types_id'], 'integer'],
            [['task_types_id'], 'exist', 'skipOnError' => true, 'targetClass' => TaskTypes::className(), 'targetAttribute' => ['task_types_id' => 'id']],
        ];
    }



    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAnswers()
    {
        return $this->hasMany(Answers::className(), ['tasks_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getBunchLessonTasks()
    {
        return $this->hasMany(BunchLessonTasks::className(), ['tasks_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTaskTypes()
    {
        return $this->hasOne(TaskTypes::className(), ['id' => 'task_types_id']);
    }
}
