<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "answers".
 *
 * @property int $id
 * @property int $answers_type_id
 * @property int $words_id
 * @property int $tasks_id
 *
 * @property AnswersType $answersType
 * @property Tasks $tasks
 * @property Words $words
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

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['answers_type_id', 'words_id', 'tasks_id'], 'required'],
            [['answers_type_id', 'words_id', 'tasks_id'], 'integer'],
            [['answers_type_id'], 'exist', 'skipOnError' => true, 'targetClass' => AnswersType::className(), 'targetAttribute' => ['answers_type_id' => 'id']],
            [['tasks_id'], 'exist', 'skipOnError' => true, 'targetClass' => Tasks::className(), 'targetAttribute' => ['tasks_id' => 'id']],
            [['words_id'], 'exist', 'skipOnError' => true, 'targetClass' => Words::className(), 'targetAttribute' => ['words_id' => 'id']],
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAnswersType()
    {
        return $this->hasOne(AnswersType::className(), ['id' => 'answers_type_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTasks()
    {
        return $this->hasOne(Tasks::className(), ['id' => 'tasks_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getWords()
    {
        return $this->hasOne(Words::className(), ['id' => 'words_id']);
    }
}
