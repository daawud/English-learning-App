<?php

namespace app\models;

use Yii;
use \yii\db\ActiveRecord;

/**
 * This is the model class for table "words".
 *
 * @property int $id
 * @property string $eng
 * @property string $rus
 * @property string|null $transcript
 * @property string|null $audio
 * @property string|null $img_url
 *
 * @property Answers[] $answers
 */
class Words extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{words}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['eng', 'rus'], 'required'],
            [['eng', 'rus', 'transcript', 'audio'], 'string', 'max' => 45],
            [['img_url'], 'string', 'max' => 255],
        ];
    }


    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAnswers()
    {
        return $this->hasMany(Answers::className(), ['words_id' => 'id']);
    }
}
