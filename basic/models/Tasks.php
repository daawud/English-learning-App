<?php
namespace app\models;
use Yii;
use \yii\db\ActiveRecord;
/**
 * This is the model class for table "tasks".
 *
 * @property int $id
 * @property int $task_types_id
 * @property int points

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




}