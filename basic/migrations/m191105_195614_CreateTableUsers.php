<?php

use yii\db\Migration;

/**
 * Class m191105_195614_CreateTableUsers
 */
class m191105_195614_CreateTableUsers extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('users', [
            'id'=> "VARCHAR(45) NOT NULL",
            'first_name'=>$this->string(45),
            'last_name'=>$this->string(45),
            'birth_date'=>$this->date(),
            'points'=>$this->integer()->notNull(),
            "PRIMARY KEY (`id`)",
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('users');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191105_195614_CreateTableUsers cannot be reverted.\n";

        return false;
    }
    */
}
