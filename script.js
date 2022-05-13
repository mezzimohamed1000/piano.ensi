let type = window.location.href;
//Question bank
if (type.includes("type=html")) {
    var questionBank= [
        {
            question : "What were the keys of a piano originally made from?",
            option : ["ebony and ivory","sugar and spice","plastic and bone","stone and bone"],
            answer : "ebony and ivory"
        },
        {
            question : "The black keys are used to play:",
            option : ["vibrato","sharps and flats","sustained notes","baseball"],
            answer : "sharps and flats"
        },
        {
            question : "Is it important to tune your piano, or to have it tuned for you?",
            option : ["YES","NO","Both","None"],
            answer : "YES"
        },
        {
            question : "What famous piano making company did Engleherd Steinweg found?",
            option : ["Roland","Yamaha","Steinway","Williams and Sons"],
            answer : "Steinway"
        },
        {
            question : "Which of these famous jazz musicians was best known as a pianist?",
            option : ["Thelonious Monk","Dizzy Gillespie","Charlie Parker","Benny Goodman"],
            answer : "Thelonious Monk"
        },
        {
            question : "His famous piano sonatas include the 'Moonlight Sonata' and the 'Pathetique'.",
            option : ["Beethoven","Bach","Mozart","Handel"],
            answer : "Beethoven"
        },
        {
            question : "What were the keys of a piano originally made from?",
            option : ["ebony and ivory","sugar and spice","plastic and bone","stone and bone"],
            answer : "ebony and ivory"
        },
        {
            question : "Sound on the piano is produced when ______ hit the strings.",
            option : ["keys","hammers","fingers","dampers"],
            answer : "hammers"
        },
        {
            question : "The black keys are used to play:",
            option : ["vibrato","sharps and flats","sustained notes","baseball"],
            answer : "sharps and flats"
        },
        {
            question : "The standard piano has :",
            option : ["120 keys","115 keys","100 keys","110 keys"],
            answer :  "120 keys"
        }
    ]
} else if(type.includes("type=css")) {
    var questionBank= [
        {
            question : "The black keys are used to play:",
            option : ["vibrato","sharps and flats","sustained notes","baseball"],
            answer : "sharps and flats"
        },
        {
            question : "What were the keys of a piano originally made from?",
            option : ["ebony and ivory","sugar and spice","plastic and bone","stone and bone"],
            answer : "ebony and ivory"
        },
        {
            question : "The black keys are used to play:",
            option : ["vibrato","sharps and flats","sustained notes","baseball"],
            answer : "sharps and flats"
        },
        {
            question : "Is it important to tune your piano, or to have it tuned for you?",
            option : ["YES","NO","Both","None"],
            answer : "YES"
        },
        {
            question : "What famous piano making company did Engleherd Steinweg found?",
            option : ["Roland","Yamaha","Steinway","Williams and Sons"],
            answer : "Steinway"
        },
        {
            question : "Which of these famous jazz musicians was best known as a pianist?",
            option : ["Thelonious Monk","Dizzy Gillespie","Charlie Parker","Benny Goodman"],
            answer : "Thelonious Monk"
        },
        {
            question : "His famous piano sonatas include the 'Moonlight Sonata' and the 'Pathetique'.",
            option : ["Beethoven","Bach","Mozart","Handel"],
            answer : "Beethoven"
        },
        {
            question : "What were the keys of a piano originally made from?",
            option : ["ebony and ivory","sugar and spice","plastic and bone","stone and bone"],
            answer : "ebony and ivory"
        },
        {
            question : "Sound on the piano is produced when ______ hit the strings.",
            option : ["keys","hammers","fingers","dampers"],
            answer : "hammers"
        },
        {
            question : "The standard piano has :",
            option : ["120 keys","115 keys","100 keys","110 keys"],
            answer :  "120 keys"
        }
    ]
} else if(type.includes("type=js")) {
    var questionBank= [
        {
            question : "What famous piano making company did Engleherd Steinweg found?",
            option : ["Roland","Yamaha","Steinway","Williams and Sons"],
            answer : "Steinway"
        },
        {
            question : "What were the keys of a piano originally made from?",
            option : ["ebony and ivory","sugar and spice","plastic and bone","stone and bone"],
            answer : "ebony and ivory"
        },
        {
            question : "The black keys are used to play:",
            option : ["vibrato","sharps and flats","sustained notes","baseball"],
            answer : "sharps and flats"
        },
        {
            question : "Is it important to tune your piano, or to have it tuned for you?",
            option : ["YES","NO","Both","None"],
            answer : "YES"
        },
        {
            question : "Which of these famous jazz musicians was best known as a pianist?",
            option : ["Thelonious Monk","Dizzy Gillespie","Charlie Parker","Benny Goodman"],
            answer : "Thelonious Monk"
        },
        {
            question : "His famous piano sonatas include the 'Moonlight Sonata' and the 'Pathetique'.",
            option : ["Beethoven","Bach","Mozart","Handel"],
            answer : "Beethoven"
        },
        {
            question : "What were the keys of a piano originally made from?",
            option : ["ebony and ivory","sugar and spice","plastic and bone","stone and bone"],
            answer : "ebony and ivory"
        },
        {
            question : "Sound on the piano is produced when ______ hit the strings.",
            option : ["keys","hammers","fingers","dampers"],
            answer : "hammers"
        },
        {
            question : "The black keys are used to play:",
            option : ["vibrato","sharps and flats","sustained notes","baseball"],
            answer : "sharps and flats"
        },
        {
            question : "The standard piano has :",
            option : ["120 keys","115 keys","100 keys","110 keys"],
            answer :  "120 keys"
        }
    ]
} else {
    var questionBank= [
        {
            question:"oops! Wrong Quiz -",
            option :["-","-","-","-",],
            answer : "-"
        }
    ]
}

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerText= questionBank[i].option[0];
    option1.innerText= questionBank[i].option[1];
    option2.innerText= questionBank[i].option[2];
    option3.innerText= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function calcScore(e){
    if(e.innerText===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'rgb(72, 255, 102)';
    }
    else{
        document.getElementById(e.id).style.background= 'rgb(255, 80, 80)';
    }
    setTimeout(nextQuestion,300);
}

function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

next.addEventListener('click',nextQuestion);

function backToQuiz(){
    location = "index.html";
}

function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerText= questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();