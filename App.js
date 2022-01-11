const input = document.getElementById('input');
const todosUL = document.querySelector('.todos');
const form = document.querySelector('.form');
const button = document.querySelector('.btn');



form.addEventListener ("submit",(e)=> {
    e.preventDefault;
})


button.addEventListener ("click", ()=> {

    const inputText = input.value;
    if (inputText=="")
    {
        alert("Todo list cant be empty");
    }

    else {
    const listTodo = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement ('button'); 
    checkbox.type="checkbox"; 
    
    checkbox.addEventListener ("click", ()=> {
        listTodo.classList.toggle ("completed");
    })
    listTodo.innerHTML= inputText;
    todosUL.appendChild(listTodo);
    listTodo.appendChild(checkbox);
    listTodo.appendChild(deleteButton)
    checkbox.classList.add ('checkboxStyle')  
    input.value = '';
    }

})



