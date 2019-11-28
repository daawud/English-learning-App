<?php

use yii\db\Migration;

/**
 * Class m191113_154353_Drop_FK_user_lesson_stats
 */
class m191113_154353_Drop_FK_user_lesson_stats extends Migration
{
    /**
     * удаляем FK_user_lesson_stats_users1, что бы была возможность изменить поле id в таблице users 
     */
    public function safeDown()
    {
        $this->dropForeignKey(
            'fk_user_lesson_stats_users1',
            'user_lesson_stats'
        );

        $this->dropIndex(
            'idx_user_lesson_stats_users1',
            'user_lesson_stats'
        );
    }
}
