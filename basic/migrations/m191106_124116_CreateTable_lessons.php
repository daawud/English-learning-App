<?php

use yii\db\Migration;

/**
 * Class m191106_124116_CreateTable_lessons
 */
class m191106_124116_CreateTable_lessons extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('lessons', [
            'id'=>$this->primaryKey(),
            'name'=>$this->string(45)->notNull(),
            'theme_id'=>$this->integer()->notNull(),
            'points_to_pay'=>$this->integer()->notNull(),
            'img_url'=>$this->string(255),
        ], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');

        $this->addForeignKey('fk_lessons_theme',
            'lessons','theme_id',
            'theme','id',
            'CASCADE', 'CASCADE' );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey(
            'fk_lessons_theme',
            'lessons'
        );
        
        $this->dropTable('lessons');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191106_124116_lessons cannot be reverted.\n";

        return false;
    }
    */
}
