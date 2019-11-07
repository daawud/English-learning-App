<?php

use yii\db\Migration;

/**
 * Class m191107_153048_Insert_answers_type
 */
class m191107_153048_Insert_answers_type extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
         $this->batchInsert( 'answers_type', [
            'type'
        ], [
            ['correct'],
            ['incorrect']      
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
         $this->truncateTable('answers_type');
    }
    

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191107_153048_Insert_answers_type cannot be reverted.\n";

        return false;
    }
    */
}
