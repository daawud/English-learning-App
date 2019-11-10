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
}
