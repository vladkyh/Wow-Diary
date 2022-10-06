(function(){
    function createAppTitle(title){
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }   
    function createTodoItemForm(){
        let form = document.createElement('form');
        
        let input = document.createElement('textarea');
        let buttonWrapper = document.createElement('div');    //делаем классы для формы
        let button = document.createElement('button');
        form.classList.add( 'mb-3', 'container' );
        form.setAttribute('method', 'post');
        form.setAttribute('action', '/addPost');
        input.classList.add( 'mb-3', 'form-control', 'col-12');
        
        button.classList.add('btn', 'btn-success');
        button.setAttribute('type', 'submit');
        button.textContent = 'Добавить запись';
        input.placeholder = 'Тест';
        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return{
            form,
            input,   //возвращаем значения функции
            button, 
        };
        }

    function createTodoList(){
        let list = document.createElement('ul');
        list.classList.add('diary__list');  // создаем список из будущих форм
        return list;
    }

    
    function createTodoItem(name){
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div');
        let content = document.createElement('div');
        let deleteButton = document.createElement('button');
        item.classList.add('diary__item', 'justify-content-between');
        content.textContent = name;
        content.textContent= '';
        content.classList.add('diary__text')
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
           // добавляем классы кнопкам
       
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';
        
        buttonGroup.append(deleteButton);
        item.append(content);
        content.append(name);
        item.append(buttonGroup);
        
        return{
            item,
            
            deleteButton,
        };
    }


    document.addEventListener('DOMContentLoaded', function(){
        let container = document.getElementById('todo-app');
        let todoAppTitle = createAppTitle('Список бебры');
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);



        todoItemForm.form.addEventListener('submit', function(e){
            e.preventDefault();
            if(!todoItemForm.input.value){
                return;
            }

            let todoItem = createTodoItem(todoItemForm.input.value);

            
            todoItem.deleteButton.addEventListener('click', function(){
                
                todoItem.item.remove();
            });
            todoList.append(todoItem.item);
            todoItemForm.input.value = '';
        });



        
    });







    
})();


const bebra = (name, surname) =>{
        console.log(name + ' ' + surname);
};
bebra('ЕВА', '01');
