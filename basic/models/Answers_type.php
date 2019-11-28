<?php


namespace app\models;
use Yii;
use \yii\db\ActiveRecord;

/**
 * This is the model class for table "answers_type".
 *
 * @property int $id
 * @property string $type

 */
class Answers_type extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{answers_type}}';
    }


}