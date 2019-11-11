<?php

use yii\db\Migration;

/**
 * Class m191111_103630_Insert_lessons
 */
class m191111_103630_Insert_lessons extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->batchInsert( 'lessons', [
            'name', 'theme_id', 'points_to_pay'
        ], [
            ['Первый урок', 1, 0],
            ['Первый урок', 3, 0],
            ['Первый урок', 4 ,0]
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->truncateTable('lessons');
    }
}
