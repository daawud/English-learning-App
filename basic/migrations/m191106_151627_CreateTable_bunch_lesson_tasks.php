<?php

use yii\db\Migration;

/**
 * Class m191106_151627_CreateTable_bunch_lesson_tasks
 */
class m191106_151627_CreateTable_bunch_lesson_tasks extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('bunch_lesson_tasks', [
            'id'=>$this->primaryKey(),
            'lessons_id'=>$this->integer()->notNull(),
            'tasks_id'=>$this->integer()->notNull(),
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');

        $this->addForeignKey('fk_bunch_les_tasks_lessons',
            'bunch_lesson_tasks','lessons_id',
            'lessons','id',
            'CASCADE', 'CASCADE' );

        $this->addForeignKey('fk_bunch_les_tasks_tasks',
            'bunch_lesson_tasks','tasks_id',
            'tasks','id',
            'CASCADE', 'CASCADE' );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey(
            'fk_bunch_les_tasks_lessons',
            'bunch_lesson_tasks'
        );

        $this->dropForeignKey(
            'fk_bunch_les_tasks_tasks',
            'bunch_lesson_tasks'
        );
        
        $this->dropTable('bunch_lesson_tasks');
    }
}
