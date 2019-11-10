<?php

use yii\db\Migration;

/**
 * Class m191106_123615_CreateTable_theme
 */
class m191106_123615_CreateTable_theme extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('theme', [
            'id'=>$this->primaryKey(),
            'name'=>$this->string(45)->notNull(),
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
       $this->dropTable('theme');
    }
}
