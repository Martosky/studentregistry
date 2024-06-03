let mesg = document.querySelector('.message');

function averageNum(score){
    let aveSco = 0

    for (let i = 0; i < score.length; i++){
        aveSco += score[i]
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

function passInfo(score) {
   return getGrade(score) == "F"
}

function message(aveScore, stdScore){
   let stdGrade = getGrade();
   let avgScore = averageNum();

    if (passInfo(stdScore) != "F"){
      mesg.textContent = "Your score is ! " + stdGrade + ". and your average is "+ avgScore + ". You passed.";
    }else{
      mesg.textContent = "Your score is ! " + stdGrade + ". and your average is "+ avgScore + ". You failed.";
    }

    return mesg;
}
console.log(message([23,29,10,15,11], 45))