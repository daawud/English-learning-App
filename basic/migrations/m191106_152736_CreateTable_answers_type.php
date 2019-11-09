<?php

use yii\db\Migration;

/**
 * Class m191106_152736_CreateTable_answers_type
 */
class m191106_152736_CreateTable_answers_type extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('answers_type', [
            'id'=>$this->primaryKey(),
            'type'=>$this->string(45)->notNull(),
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('answers_type');
    }
}
