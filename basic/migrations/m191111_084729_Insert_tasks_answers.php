<?php

use yii\db\Migration;

/**
 * Class m191111_084729_Insert_tasks_answers
 */
class m191111_084729_Insert_tasks_answers extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->batchInsert( 'tasks', [
            'task_types_id'
        ],[
            ['1'],
            ['2'],
            ['3'],
            ['4'],
            ['1'],
            ['2'],
            ['3'],
            ['4'],
            ['1'],
            ['2'],
            ['3'],
            ['4']
        ]);

        $this->batchInsert( 'answers', [
            'answers_type_id', 'words_id', 'tasks_id'
        ],[
            [1, 1, 1], [2, 8, 1], [2, 10, 1],
            [1, 12, 2], [2, 13, 2], [2, 2, 2],
            [1, 3, 3],
            [1, 10, 4],

            [1, 25, 5], [2, 21, 5], [2, 27, 5],
            [2, 24, 6], [1, 31, 6], [2, 30, 6],
            [1, 28, 7],
            [1, 39, 8],

            [2, 42, 9], [1, 52, 9], [2, 60, 9],
            [1, 51, 10], [2, 50, 10], [2, 41, 10],                     
            [1, 43, 11],
            [1, 48, 12]
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->truncateTable('tasks');
        $this->truncateTable('answers');
    }
}
