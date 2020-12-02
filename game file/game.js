const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [{
        question: 'Which is the tallest hotel in Oron?',
        choice1: 'Miami Escape',
        choice2: 'May Villa Hotel',
        choice3: 'Bakibum Beach Hotel',
        choice4: 'None of the above',
        answer: "3",
    },
    {
        question: 'What does the acronym Project diy mean?',
        choice1: 'project done it yourself',
        choice2: 'project do it yoursef',
        choice3: 'project die your hair',
        choice4: 'project daring international youth',
        answer: "2",
    },
    {
        question: 'Which of these is a tourist center in Oro?',
        choice1: 'Oron road',
        choice2: 'National Museum Oron',
        choice3: 'Idua Assang town hall',
        choice4: 'mbo local government',
        answer: "2",
    },
    {
        question: 'Which is the oldest school in oron?',
        choice1: 'Army school oron',
        choice2: 'mainalnd technical college',
        choice3: 'Methodist senior sciennce school',
        choice4: 'Methodist Boys High School',
        answer: "4",
    },
    {
        question: 'MHSS means?',
        choice1: 'Miami Escape',
        choice2: 'Mary Hanney SecondarySchool',
        choice3: 'Bakibum Beach Hotel',
        choice4: 'None of the above',
        answer: "2",
    }
]


const POINTS = 20
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/game file/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    options.forEach(Option => {
        const number = Option.dataset['number']
        Option.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptAnswers = true
}

options.forEach(Option => {
    Option.addEventListener('click', e => {
        if(!acceptAnswers) return

        acceptAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'right' : 'wrong'

        if(classToApply === 'right') {
            incrementScore(POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()