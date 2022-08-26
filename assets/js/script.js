const container = document.querySelector('.container')
const welcomeBox = document.querySelector('.welcome')
const buttonStart = document.querySelector('.buttonStart')
const questionParagrah = document.querySelector('.question')
const answersContainer = document.querySelector('.answers')
const answers = document.querySelectorAll('.answer')
const scoreSpan = document.querySelector('#score')
const buttonNext = document.querySelector('.button__next')

const questions = [
    {question:'Which city is the capital of the United States ?', 
       answers: [{text:'Paris', isAnswer:false},{text:'Madrid', isAnswer:false}, {text:'Washington', isAnswer:true},{text:'London', isAnswer:false},]
    },
    {question:"Which city has the most population ?", 
       answers: [{text:'Paris', isAnswer:false},{text:'Madrid', isAnswer:false},{text:'Washington', isAnswer:false},{text:'London', isAnswer:true},]
    },
    {question:"Which city has is the largest in area ?", 
       answers: [{text:'Paris', isAnswer:false},{text:'Madrid', isAnswer:false},{text:'Washington', isAnswer:false},{text:'London', isAnswer:true},]
    },
    {question:"Which city is the capital of the France ?", 
       answers: [{text:'Paris', isAnswer:true},{text:'Madrid', isAnswer:false},{text:'Washington', isAnswer:false},{text:'London', isAnswer:false},]
    },
    {question:"Which city is the capital of the Spain ?", 
       answers: [{text:'Paris', isAnswer:false},{text:'Madrid', isAnswer:true},{text:'Washington', isAnswer:false},{text:'London', isAnswer:false},]
    },
    {question:"Which city is the Eiffel Tower located in ?", 
       answers: [{text:'Paris', isAnswer:true},{text:'Madrid', isAnswer:false},{text:'Washington', isAnswer:false},{text:'London', isAnswer:false},]
    },

]

let firstQuestion = Math.floor(Math.random() * 5)
nextQuestion = firstQuestion
let score = 0

buttonStart.addEventListener('click', ()=> {
    welcomeBox.style.display ='none'
    container.style.display= 'grid'
    oneQuestion(firstQuestion)
})

const oneQuestion = (index) => {
   const question = questions[index]
   questionParagrah.textContent = question.question
   question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.classList.add('answer__button')
    button.append(answer.text)
    answersContainer.appendChild(button)
    button.dataset.isCorrect =answer.isAnswer
    button.addEventListener('click', checkAnswer)
   })

}

const checkAnswer = (e) => {
    const allAnswers = document.querySelectorAll('.answer__button')
    const answerBoolean = e.target.dataset.isCorrect
    if (answerBoolean == 'true') {
        e.target.classList.add('valid')
        score ++ 
        scoreSpan.textContent = score
    } else {
        e.target.classList.add('invalid')
    }

    allAnswers.forEach(el => {
        el.disabled = true
    })
}

buttonNext.addEventListener('click', () => {
    nextQuestion -- 
    if (nextQuestion < 0) {
        nextQuestion = questions.length + nextQuestion
    }

    if (firstQuestion === nextQuestion) {
        questionParagrah.textContent = 'Quiz done!'
        buttonNext.style.display = 'none'
        answersContainer.style.display = 'none'
    }
    questionParagrah.textContent = ''
    answersContainer.textContent = ''
    oneQuestion(nextQuestion)
})