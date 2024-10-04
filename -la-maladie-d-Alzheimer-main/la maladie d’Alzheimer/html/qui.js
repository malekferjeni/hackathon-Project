
const quizData = [
    {
        question: "Avez-vous des problèmes de mémoire récente ?",
        a: "oui",
        b: "non",
    },
    {
        question: "Avez-vous des difficultés à vous rappeler les noms des personnes proches ?",
        a: "oui",
        b: "non",
    },
    {
        question: "Avez-vous des difficultés à suivre des conversations ou à trouver les bons mots lors de la parole ?",
        a: "oui",
        b: "non",
    },
    {
        question: "Avez-vous des difficultés à retrouver votre chemin dans des endroits familiers ?",
        a: "oui",
        b: "non",
    },
    {
        question: "Avez-vous des changements dans votre capacité à comprendre des instructions ou à suivre des étapes dans une tâche ?",
        a: "oui",
        b: "non",
    },
    {
        question: "Avez-vous des difficultés à effectuer des tâches quotidiennes telles que cuisiner ou faire la lessive ?",
        a: "oui",
        b: "non",
    },
    {
        question: "Avez-vous des problèmes de planification ou de prise de décision ?",
        a: "oui",
        b: "non",
    },
    {
        question: "Avez-vous des oublis de rendez-vous ou d'événements importants ?",
        a: "oui",
        b: "non",
    },
];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer'); 
const questionEl = document.getElementById('question'); 
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
   
    deselectAnswers();

    
    const currentQuizData = quizData[currentQuiz];

   
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
}

function deselectAnswers() {
   
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', () => {
    
    const answer = document.querySelector('input[name="answer"]:checked');

    
    if (answer) {
        
        if (answer.id === 'a') {
            score++;
        }

       
        currentQuiz++;

        
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
           
            const percentage = (score / quizData.length) * 100;

            
            const scoreText = `Votre score final est ${score} sur ${quizData.length} questions. (${percentage}% de bonnes réponses)`;
            let resultText;
            if (percentage < 50) {
                resultText = "Il est recommandé de consulter un médecin pour une évaluation supplémentaire.";
            } else {
                resultText = "Il semble que vous n'ayez pas de symptômes significatifs de la maladie d'Alzheimer.";
            }
            quiz.innerHTML = `<h2>${scoreText}</h2><p>${resultText}</p>`;
        }
    }
});