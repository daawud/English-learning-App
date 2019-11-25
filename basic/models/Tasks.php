<?php
namespace models;
use Yii;
use \yii\db\ActiveRecord;
/**
 * This is the model class for table "tasks".
 *
 * @property int $id
 * @property int $task_types_id

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
     * @return \yii\db\ActiveQuery
     */
    public function getAnswers()
    {
        return $this->hasMany(Answers::class(), ['tasks_id' => 'id']);
    }
    public function getAnswersName()
    {
        if ($answers =$this->getAnswers()){
        return $answers->name;
        }
        return "Вариантов ответа нет";
    }
}