<?php

use yii\db\Migration;

/**
 * Class m191106_153650_CreateTable_answers
 */
class m191106_153650_CreateTable_answers extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('answers', [
            'id'=>$this->primaryKey(),
            'answers_type_id'=>$this->integer()->notNull(),
            'words_id'=>$this->integer()->notNull(),
            'tasks_id'=>$this->integer()->notNull(),
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');

        $this->addForeignKey('fk_answers_answers_type',
            'answers','answers_type_id',
            'answers_type','id',
            'CASCADE', 'CASCADE' );

        $this->addForeignKey('fk_answers_words',
            'answers','words_id',
            'words','id',
            'CASCADE', 'CASCADE' );

        $this->addForeignKey('fk_answers_tasks',
            'answers','tasks_id',
            'tasks','id',
            'CASCADE', 'CASCADE' );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey(
            'fk_answers_answers_type',
            'answers'
        );

        $this->dropForeignKey(
            'fk_answers_words',
            'answers'
        );
        
        $this->dropForeignKey(
            'fk_answers_tasks',
            'answers'
        );
        
        $this->dropTable('answers');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191106_153650_CreateTable_answers cannot be reverted.\n";

        return false;
    }
    */
}
