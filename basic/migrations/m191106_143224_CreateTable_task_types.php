<?php

use yii\db\Migration;

/**
 * Class m191106_143224_CreateTable_task_types
 */
class m191106_143224_CreateTable_task_types extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('task_types', [
            'id'=>$this->primaryKey(),
            'description'=>$this->text()->notNull(),
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
         $this->dropTable('task_types');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191106_143224_task_types cannot be reverted.\n";

        return false;
    }
    */
}
