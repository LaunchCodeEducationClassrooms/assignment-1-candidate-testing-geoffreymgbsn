const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
let question = '1) Who was the first American woman in space?';

let correctAnswer = 'Sally Ride';
let questions = [ '1) Who was the first American woman in space?',
                  '2) True or false: 5000 meters = 5 kilometers.',
                  '3) (5 + 3)/2 * 10 = ?',
                  '4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?',
                  '5)  What is the minimum crew size for the ISS?'];
let correctAnswers = ['Sally Ride',
                      'true',
                      40,
                      'Trajectory',
                      3]
                      
let candidateAnswers = ['a', 'b', 'c', 'd', 'e'];
let candidateAnswer;
let correct = 0;


function askForName() {
  candidateName = input.question("Enter your name: ");
  console.log(candidateName + '\n');

}

function askQuestion() {
  
  for (let i = 0; i < questions.length; i++){
   candidateAnswers[i] = input.question(questions [i] + " ");
   
  
  };

   console.log(candidateAnswers[2]);
   
  }




function gradeQuiz(candidateAnswers) {
    

    for (let i = 0; i < candidateAnswers.length; i++){
        console.log(questions[i] + "\n");
        console.log("Your answer: " + candidateAnswers[i]);
        console.log("Correct answer: " + correctAnswers[i] + "\n");


    }

    for (i = 0; i < candidateAnswers.length; i++){
      
        if (candidateAnswers[i].toString().toLowerCase() === correctAnswers[i].toString().toLowerCase()){
            correct++;
          }
    }
  


  
  let grade = correct/(5)*100;
  
  if (grade >= 80){
    console.log (candidateName + " passed with a score of " + grade + "%");
  }

  else {
    console.log (candidateName + " failed with a score of " + grade + "%");
  }
  

  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);



  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
