
minutesToCount = 10;

function startclock() {

  if (minutesToCount!=0) {
    finalTime = new Date();
    minutesEnd = finalTime.getMinutes() + minutesToCount;
    finalTime.setMinutes(minutesEnd, finalTime.getSeconds(), finalTime.getMilliseconds());
    minutesToCount = 0;
  }

  currentTime = new Date();
  milliSecLeft = finalTime.getTime() - currentTime.getTime();
  currentTime.setTime(milliSecLeft);

  //Calculate and format the time elements
  minutes = currentTime.getMinutes();
  if (minutes < 10) { minutes = '0' + minutes; }
  seconds = currentTime.getSeconds();
  if (seconds < 10) { seconds = '0' + seconds; }
  milliseconds = currentTime.getMilliseconds();

  //Display the time left
  timeLeftText = minutes + ':' + seconds + ':' + milliseconds;
  document.getElementById('timeLeft').innerHTML = timeLeftText;

  //Recall the function if there is time left - or display end time
  if (milliSecLeft > 0) {
    setTimeout("startclock()",10);
  } else {
    document.getElementById('timeLeft').innerHTML = '00:00:000';
  }
}





const questions = [
  {
    question: "Who invented JavaScript?",
    option1: "Douglas Crockford",
    option2: "Sheryl Sandberg",
    option3: "Brendan Eich",
    answer: "2",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    option1: "Node.js",
    option2: "TypeScript",
    option3: "npm",
    answer: "2",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    option1: "Angular",
    option2: "jQuery",
    option3: "RequireJS",
    answer: "2",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    option1: "Node.js",
    option2: "TypeScript",
    option3: "npm",
    answer: "2",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    option1: "Node.js",
    option2: "TypeScript",
    option3: "npm",
    answer: "2",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    option1: "Angular",
    option2: "jQuery",
    option3: "RequireJS",
    answer: "2",
  },
  ,
  {
    question: "Which tool can you use to ensure code quality?",
    option1: "Angular",
    option2: "jQuery",
    option3: "RequireJS",
    answer: "2",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    option1: "Node.js",
    option2: "TypeScript",
    option3: "npm",
    answer: "2",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    option1: "Angular",
    option2: "jQuery",
    option3: "RequireJS",
    answer: "2",
  }
];


count = 0;
var score = 0;
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");


questions.innerHTML = "Q1" + questions[count].question;
option1.innerHTML = questions[count].option1;
option2.innerHTML = questions[count].option2;
option3.innerHTML = questions[count].option3;


var question = document.getElementById('question')
question.innerHTML = "Q1)" + questions[count].question;

function nextQuestion() {

  if (count < questions.length - 1) {
    var options = document.getElementsByName("option");
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        console.log(options[i].value)
      }
      options[i].checked = false;
      disable()
    }
    count++;

    // var question = document.getElementById('question')
    question.innerHTML = "Q" + (count + 1) + ")" + questions[count].question;
    option1.innerHTML = questions[count].option1;
    option2.innerHTML = questions[count].option2;
    option3.innerHTML = questions[count].option3;
  }
  else {
    alert("you have done with this quiz please submit your quiz for grading")
  }
}

function enable() {
  // var btn = document.getElementById("btn");
  // btn.disable = false;
  document.getElementById("btn").disabled = false;
}

function disable() {

  document.getElementById("btn").disabled = true;
}



function submit() {
  alert("your Quiz has been submitted")
}

// var abc = options[i].checked

// function score() {
//   var options = document.getElementsByName("option");
//   if ( options == answer) {
//     console.log("ajkaaakjkaka")
//   }
// }
// score()


//-----------------Check awnsers------------------------
//Pushusers ansers to an array

// function displayScore() {


//   var score = 0;
//   for (var j = 0; j < questions.length; j++) {

//     var responce  = questions[j].option3
//     if (responce === questions[j].answer) {
//       score++;
//     }
//     console.log(responce)
//   }


// }
// displayScore()



// count = 0;



// function startQuiz() {
//   var question = document.getElementById('question')
//   question.innerHTML = "Q1" + questions[count].question;
//   option1.innerHTML = questions[count].option1;
//   option2.innerHTML = questions[count].option2;
//   option3.innerHTML = questions[count].option3;

// }


// function nextQuestion(){

// }