let strong = document.getElementById('strong');
let dex = document.getElementById('dexter');
let intel = document.getElementById('intel');



document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.user__strench').addEventListener('click', function(str){
        
        document.querySelector('.user__op__dex').classList.remove('user__op__active');
        document.querySelector('.user__op__int').classList.remove('user__op__active');
        document.querySelector('.user__op__str').classList.add('user__op__active');
       
        
    });
    document.querySelector('.user__dexterity').addEventListener('click', function(str){
        
        document.querySelector('.user__op__str').classList.remove('user__op__active');
        document.querySelector('.user__op__int').classList.remove('user__op__active');
        document.querySelector('.user__op__dex').classList.add('user__op__active');
       
    });
    document.querySelector('.user__intelligence').addEventListener('click', function(str){
        document.querySelector('.user__op__dex').classList.remove('user__op__active');
       
        document.querySelector('.user__op__str').classList.remove('user__op__active');
        document.querySelector('.user__op__int').classList.add('user__op__active');
       
        
    });
});

// счётчик
// const counter = function () {
//     const btns = document.querySelectorAll('.counter__btn');
  
  
//     btns.forEach(btn => {
//       btn.addEventListener('click', function () {
//         const direction = this.dataset.direction;
//         const inp = this.parentElement.querySelector('.counter__value');
//         const currentValue = +inp.value;
//         let newValue;
  
//         if (direction === 'plus') {
//           newValue = currentValue + 1;
//         } else {
//           newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
//         }
  
//         inp.value = newValue;
//       })
//     })
  
//   }
  
//   counter();