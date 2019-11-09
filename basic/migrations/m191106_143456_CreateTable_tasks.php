<?php

use yii\db\Migration;

/**
 * Class m191106_143456_CreateTable_tasks
 */
class m191106_143456_CreateTable_tasks extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('tasks', [
            'id'=>$this->primaryKey(),
            'task_types_id'=>$this->integer()->notNull(),
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');

        $this->addForeignKey('fk_tasks_task_types',
            'tasks','task_types_id',
            'task_types','id',
            'CASCADE', 'CASCADE' );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey(
            'fk_tasks_task_types',
            'tasks'
        );
        
        $this->dropTable('tasks');
    }
}
