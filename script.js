let mesg = document.querySelector('.message');

function averageNum(score){
    let aveSco = 0

    for (let i = 0; i < score.length; i++){
        aveSco + score[i]
    }
    return aveSco / score.length

    }

function getGrade(score){

     if(score == 100){
        return "A++"
     } else if (score >= 90){
        return "A";
     }else if (score >= 80){
        return "B";
     }else if (score >= 70){
      return "C";
   }else if (score >= 60){
      return "D";
   }else{
      return "F";
   }

}