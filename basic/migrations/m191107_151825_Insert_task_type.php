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
            ['chooseRusWord', 'Выберите правильный перевод с английского языка'],
            ['chooseEngWord', 'Выберите правильный перевод с русского языка'],
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

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191107_151825_Insert_task_type cannot be reverted.\n";

        return false;
    }
    */
}
