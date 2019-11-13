<?php

use yii\db\Migration;

/**
 * Class m191111_103715_Insert_lessons_tasks
 */
class m191111_103715_Insert_lessons_tasks extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
         $this->batchInsert( 'bunch_lesson_tasks', [
            'lessons_id', 'tasks_id'
        ],[
            [ 1, 1 ],
            [ 1, 2 ],
            [ 1, 3 ],
            [ 1, 4 ],
            [ 2, 5 ],
            [ 2, 6 ],
            [ 2, 7 ],
            [ 2, 8 ],
            [ 3, 9 ],
            [ 3, 10 ],
            [ 3, 11 ],
            [ 3, 12 ]
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->truncateTable('bunch_lesson_tasks');
    }
}
