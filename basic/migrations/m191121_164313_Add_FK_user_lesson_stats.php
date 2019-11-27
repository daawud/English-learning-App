<?php

use yii\db\Migration;

/**
 * Class m191121_164313_Add_FK_user_lesson_stats
 */
class m191121_164313_Add_FK_user_lesson_stats extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createIndex(
            'idx_user_lesson_stats_users1',
            'user_lesson_stats',
            'users_id'
        );

        
        $this->addForeignKey(
            'fk_user_lesson_stats_users1',
            'user_lesson_stats',
            'users_id',
            'users',
            'userId',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropIndex(
            'idx_user_lesson_stats_users1',
            'user_lesson_stats',
            'users_id'
        );

        $this->dropForeignKey(
            'fk_user_lesson_stats_users1',
            'user_lesson_stats',
            'users_id',
            'users',
            'userId',
            'CASCADE'
        );
    }
}
