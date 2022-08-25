const container = document.querySelector('.container')
const welcomeBox = document.querySelector('.welcome')
const buttonStart = document.querySelector('.buttonStart')
const questionParagrah = document.querySelector('.question')
const answersContainer = document.querySelector('.answers')
const answers = document.querySelectorAll('.answer')
const scoreSpan = document.querySelector('#score')
const buttonNext = document.querySelector('.button__next')

buttonStart.addEventListener('click', ()=> {
    welcomeBox.style.display ='none'
    container.style.display= 'grid'
})