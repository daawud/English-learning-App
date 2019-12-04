<?php

namespace app\components;

use yii\base\Component;

use app\models\TaskTypes;
use app\models\Tasks;
use app\models\Words;
use app\models\Answers;
use app\models\AnswersType;


class TaskComponent extends Component {

    public function getTask($id){
        $out = [];

        $task = Tasks::findOne($id);
        $correct = Answers::find()->where(['tasks_id' => $id, 'answers_type_id' => 1])->one();
        $incorrect = Answers::find()->where(['tasks_id' => $id, 'answers_type_id' => 2])->all();
        $correctWord = Words::findOne($correct["words_id"]);
        $incorrectIds = [];
        foreach($incorrect as $word){
            $incorrectIds[] = $word["words_id"];
        }
        $incorrectWords = Words::findAll($incorrectIds);
        $words = Words::findAll($incorrectWords);
        $task_types = TaskTypes::findOne($task["task_types_id"]);

        $out["taskID"] = $task["id"];
        //$out["points"] = $task->points;   в предоставленном дампе нет такого поля
        $out["givenWordId"] = $correctWord["id"];
        $out["taskType"] = $task_types["name"];
        $out["taskDescription"] = $task_types["description"];
        $out["imgUrl"] = $correctWord["img_url"];
        $out["transcription"] = $correctWord["transcript"];
        $out["givenWordEng"] = $correctWord["eng"];
        $out["givenWordRus"] = $correctWord["rus"];
        $out["givenAnswers"] = [
            ["word"=> $correctWord["eng"],
                "type"=> "correct"],
            ["word"=> $words[0]["eng"],
                "type"=> "incorrect"],
            ["word"=> $words[1]["eng"],
                "type"=> "incorrect"],
        ];

        $response = json_encode($out);

        return $response;
    }

}