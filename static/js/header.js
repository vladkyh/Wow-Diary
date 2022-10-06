document.querySelector('.header__burger').addEventListener('click', function(lol){
    document.querySelector('.burger-pol , .header__burger').classList.toggle('active')
})
document.querySelector('.header__burger').addEventListener('click', function(lols){
    document.querySelector('.header__menu').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
})
