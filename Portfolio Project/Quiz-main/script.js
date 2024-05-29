const content = document.getElementById('content')
const questions = document.createElement('div')
const input = document.createElement('input')
const button = document.createElement('button')
const correctAns = document.getElementById('correctAns')
const wrongAns = document.getElementById('wrongAns')

const mode = document.getElementById('mode')
document.getElementById('mode').hidden = true

let currentQuestion = 0
let corrects = 0
let wrongs = 0

const Datas = [
    {question: 'Question 1', answer: 1},
    {question: 'Question 2', answer: 2},
    {question: 'Question 3', answer: 3},
    {question: 'Question 4', answer: 4},
    {question: 'Question 5', answer: 5},
    {question: 'Question 6', answer: 6},
    {question: 'Question 7', answer: 7},
]

function StartQuiz() {
    document.getElementById('startButton').hidden = true
    document.getElementById('mode').hidden = false

    questions.innerText = Datas[currentQuestion].question
    input.className = 'answer'
    input.id = 'answer'
    input.type = 'text'
    button.innerText = 'Submit'
    button.className = 'btn2'
    button.addEventListener('click', checkAnswer)

    content.appendChild(questions)
    content.appendChild(input)
    content.appendChild(button)
    
    correctAns.innerText = `Correct Answers: ${corrects}`
    wrongAns.innerText = `Wrong Answers : ${wrongs}`
}

function checkAnswer() {
    let answer = document.getElementById('answer').value

    if (answer == Datas[currentQuestion].answer) {
        currentQuestion++
        corrects++
    }
    else {
        wrongs++
    }
    if (currentQuestion === Datas.length) {
        currentQuestion = 0
     }

    correctAns.innerText = `Correct Answers: ${corrects}`
    wrongAns.innerText = `Wrong Answers: ${wrongs}`
    questions.innerText = Datas[currentQuestion].question
}

mode.addEventListener('click', () => {
    document.body.classList.toggle('switchMode')
    button.classList.toggle('switchMode2')
    mode.classList.toggle('mode2')
})
