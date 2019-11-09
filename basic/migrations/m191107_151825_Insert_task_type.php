<?php

use yii\db\Migration;

/**
 * Class m191107_151825_Insert_task_type
 */
class m191107_151825_Insert_task_type extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('task_types', 'name', 'string not null ');

        $this->batchInsert( 'task_types', [
            'name', 'description'
        ], [
            ['chooseRusWord', 'Переведите на русский язык'],
            ['chooseEngWord', 'Переведите на английский язык'],
            ['typeEngWord', 'Введите перевод на английский язык'],
            ['typeRusWord', 'Введите перевод на русский язык']
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->truncateTable('task_types');
    }
}
