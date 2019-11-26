<?php


namespace models;
use Yii;
use \yii\db\ActiveRecord;
/**
 * This is the model class for table "task_types".
 *
 * @property int $id
 * @property string $description
 * @property string $name


 */

class Task_types extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{task_types}}';
    }
    public function getAnswersTypeName()
    {
        if ($answers =$this->getAnswersType())
        {
            return $answers->name;
        }
        return "Вариантов ответа нет";
    }
    /**
     * @return \yii\db\ActiveQuery
     */

    public function getTasksRelations()
    {
        return $this->hasMany(Tasks::class(),['task_types_id' => 'id']);
    }

    public function getAnswers(){
        return $this->hasMany(Answers::class,['tasks_id' => 'id'])->via('TasksRelations')->all();
    }


}