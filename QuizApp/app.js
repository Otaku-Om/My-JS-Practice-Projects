const quizData = [{
   question: "Which of the following is a client site language?",
   a: "Java",
   b: "C",
   c: "Python",
   d: "JavaScript",
   correct: "d",
},
{
   question: "What does HTML stand for?",
   a: "Hypertext Markup Language",
   b: "Cascading Style Sheet",
   c: "Jason Object Notation",
   d: "Helicopters Terminals Motorboats Lamborginis",
   correct: "a",
},
{
   question: "What year was JavaScript launched?",
   a: "1996",
   b: "1995",
   c: "1994",
   d: "none of the above",
   correct: "b",
},
{
   question: "What does CSS stands for?",
   a: "Hypertext Markup Language",
   b: "Cascading Style Sheet",
   c: "Jason Object Notation",
   d: "Helicopters Terminals Motorboats Lamborginis",
   correct: "b",
}
];



let index = 0;
let right = 0 , wrong = 0;
let totalLength = quizData.length;

const questionElement = document.getElementById("question");

const labelsCollection = document.querySelectorAll(".options");

const inputsCollection = document.querySelectorAll(".inputs");

const loadQuestion = () => {
   if(index === totalLength){
      return endQuiz();
   }

   reset();
   const data = quizData[index];
   questionElement.innerText = `${index + 1}) ${data.question}`;
   labelsCollection[0].innerText = data.a;
   labelsCollection[1].innerText = data.b;
   labelsCollection[2].innerText = data.c;
   labelsCollection[3].innerText = data.d;
}

const submitQuiz = () => {
   const data = quizData[index];
   const ans = getAnswer()
   if(ans === data.correct){
      right++;
   }
   else{
      wrong++;
   }
   index++;
   loadQuestion();
   return;
}


const getAnswer = () => {
   let answer;
   inputsCollection.forEach((input) => {
      if(input.checked){
         answer = input.value;
      }
   })
   return answer;
}

const reset = () => {
   inputsCollection.forEach((input) => {
      input.checked = false;
   })
}

const  endQuiz = () => {
   const box = document.querySelector(".box");
   box.innerHTML = `
   <h3>Thank for playing the quiz</h3>
   <h2> ${right}/${totalLength} are correct</h2>
   `
}

loadQuestion();




