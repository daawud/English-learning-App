<?php

use yii\db\Migration;

/**
 * Class m191106_153026_CreateTable_words
 */
class m191106_153026_CreateTable_words extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
         $this->createTable('words', [
            'id'=>$this->primaryKey(),
            'eng'=>$this->string(45)->notNull(),
            'rus'=>$this->string(45)->notNull(),
            'transcript'=>$this->string(45),
            'audio'=>$this->string(45),
            'img_url'=>$this->string(255),
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('words');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191106_153026_words cannot be reverted.\n";

        return false;
    }
    */
}
