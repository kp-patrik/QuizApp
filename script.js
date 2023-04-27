const quizData = [
    {
        question: 'First Afghan War took place in',
        a: '1839',
        b: '1843',
        c: '1833',
        d: '1848',
        correct: 'a',
    },
    {
        question: 'Grand Central Terminal, Park Avenue, New York is the world',
        a: 'largest railway station',
        b: 'highest railway station',
        c: 'longest railway station',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'Entomology is the science that studies',
        a: 'Behavior of human beings',
        b: 'Insects',
        c: 'The origin and history of technical and scientific terms',
        d: 'The formation of rocks',
        correct: 'b',
    },
    {
        question: 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        a: 'Asia',
        b: 'Africa',
        c: 'Europe',
        d: 'Australia',
        correct: 'b',
    },
    {
        question: 'Garampani sanctuary is located at',
        a: 'Junagarh, Gujarat',
        b: 'Diphu, Assam',
        c: 'Kohima, Nagaland',
        d: 'Gangtok, Sikkim',
        correct: 'b',
    },
    {
        question: 'For which of the following disciplines is Nobel Prize awarded?',
        a: 'Physics and Chemistry',
        b: 'Physiology or Medicine',
        c: 'Literature, Peace and Economics',
        d: 'All of the above',
        correct: 'd',
    },
    {
        question: 'Hitler party which came into power in 1933 is known as',
        a: 'Labour Party',
        b: 'Nazi Party',
        c: 'Ku-Klux-Klan',
        d: 'Democratic Party',
        correct: 'b',
    },
    {
        question: 'FFC stands for',
        a: 'Foreign Finance Corporation',
        b: 'Film Finance Corporation',
        c: 'Federation of Football Council',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'Fastest shorthand writer was',
        a: 'Dr. G. D. Bist',
        b: 'J.R.D. Tata',
        c: 'J.M. Tagore',
        d: 'Khudada Khan',
        correct: 'a',
    },
    {
        question: 'Epsom (England) is the place associated with',
        a: 'Horse racing',
        b: 'Polo',
        c: 'Shooting',
        d: 'Snooker',
        correct: 'a',
    },
    {
        question: 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
        a: '1967',
        b: '1968',
        c: '1958',
        d: '1922',
        correct: 'a',
    },
    {
        question: 'Galileo was an Italian astronomer who',
        a: 'developed the telescope',
        b: 'discovered four satellites of Jupiter',
        c: 'discovered that the movement of pendulum produces a regular time measurement',
        d: 'All of the above',
        correct: 'd',
    },
    {
        question: 'Habeas Corpus Act 1679',
        a: 'states that no one was to be imprisoned without a writ or warrant stating the charge against him',
        b: 'provided facilities to a prisoner to obtain either speedy trial or release in bail',
        c: 'safeguarded the personal liberties of the people against arbitrary imprisonment by the king`s orders',
        d: 'All of the above',
        correct: 'd',
    },
    {
        question: 'Exposure to sunlight helps a person improve his health because',
        a: 'the infrared light kills bacteria in the body',
        b: 'resistance power increases',
        c: 'the pigment cells in the skin get stimulated and produce a healthy tan',
        d: 'the ultraviolet rays convert skin oil into Vitamin D',
        correct: 'd',
    },
    {
        question: 'Golf player Vijay Singh belongs to which country?',
        a: 'USA',
        b: 'Fiji',
        c: 'India',
        d: 'UK',
        correct: 'b',
    },
    {
        question: 'Guarantee to an exporter that the importer of his goods will pay immediately for the goods ordered by him, is known as',
        a: 'Letter of Credit (L/C)',
        b: 'laissezfaire',
        c: 'inflation',
        d: 'None of the above',
        correct: 'a',
    },
];


const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
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
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
            <h2>You answered correctly at 
            ${score}/${quizData.length} questions.</h2>
            <button 
            onclick="location.reload()">Reload</Button>
            `;
        }
    }



});