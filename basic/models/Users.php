<?php


namespace app\models;


use yii\db\ActiveRecord;

class Users extends ActiveRecord
{

	public function fields() {
		$fields = parent::fields();
		unset($fields['reg_date']);
		
		return $fields;
	}
}