<?php

use yii\db\Migration;

/**
 * Class m191106_143224_CreateTable_task_types
 */
class m191106_143224_CreateTable_task_types extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('task_types', [
            'id'=>$this->primaryKey(),
            'description'=>$this->text()->notNull(),
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
         $this->dropTable('task_types');
    }
}
