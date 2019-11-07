<?php

use yii\db\Migration;

/**
 * Class m191106_142256_CreateTable_user_lesson_stats
 */
class m191106_142256_CreateTable_user_lesson_stats extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('user_lesson_stats', [
            'id'=>$this->primaryKey(),
            'users_id'=>$this->string(45)->notNull(),
            'lessons_id'=>$this->integer()->notNull(),
            'compl_tasks_counter'=>$this->integer()->notNull(),
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');

        $this->addForeignKey('fk_user_lesson_stats_lessons1',
            'user_lesson_stats','lessons_id',
            'lessons','id',
            'CASCADE', 'CASCADE' );

        $this->addForeignKey('fk_user_lesson_stats_users1',
            'user_lesson_stats','users_id',
            'users','id',
            'CASCADE', 'CASCADE' );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey(
            'fk_user_lesson_stats_lessons1',
            'user_lesson_stats'
        );

        $this->dropForeignKey(
            'fk_user_lesson_stats_users1',
            'user_lesson_stats'
        );
        
        $this->dropTable('user_lesson_stats');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191106_142256_user_lesson_stats cannot be reverted.\n";

        return false;
    }
    */
}
