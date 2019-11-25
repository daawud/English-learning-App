<?php


namespace models;
use Yii;
use \yii\db\ActiveRecord;

/**
 * This is the model class for table "answers".
 *
 * @property int $id
 * @property int $answers_type_id
 * @property int $words_id
 * @property int $tasks_id

 */
class Answers extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{answers}}';
    }
    public function getTasks()
    {
        return $this->hasOne(Tasks::class(), ['id' => 'tasks_id']);
    }

}