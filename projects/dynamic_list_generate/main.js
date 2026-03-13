window.addEventListener('DOMContentLoaded' , () => {


    const testInputField = document.getElementById('taskInput')
const addBtn = document.getElementById('addButton')
const taskList = document.getElementById('task-list')
const priorityTag = document.getElementById('priority-check')


addBtn.addEventListener('click' , ()=>{


    if ( testInputField.value.trim() == ''){
        alert('Please add a valid task!! ☺️☺️')
        return;
    }

    const listTag = document.createElement('li')
    let taskField = document.createElement('h3')
    const divBtn = document.createElement('div')
    const deleteBtn = document.createElement('button')
    const editbutton = document.createElement('button')
    taskField.innerText = testInputField.value
    deleteBtn.textContent = 'Delete'
    editbutton.textContent= 'Edit'
    deleteBtn.classList.add('delete')
    editbutton.classList.add('edit')
    listTag.appendChild(taskField)
    divBtn.appendChild(editbutton)
    divBtn.appendChild(deleteBtn)

    listTag.appendChild(divBtn)

    
    if ( priorityTag.value == 'imp'){
            taskList.prepend(listTag)
    }
    else{
        taskList.appendChild(listTag)
    }
    
    testInputField.value=''
    priorityTag.value='Choose option: '


    deleteBtn.addEventListener('click' , ()=>{
        taskList.removeChild(listTag)
    })


    editbutton.addEventListener('click' , ()=>{
    const inputFieldTag = document.createElement('input')
    inputFieldTag.value = taskField.innerText

    taskField.replaceWith(inputFieldTag)
    
    inputFieldTag.addEventListener('keypress' , (event) =>{
        if ( event.key=== 'Enter') {
            event.preventDefault();
            const newTask = inputFieldTag.value
            const taskField1 = document.createElement('h3')
            taskField1.textContent = newTask

            inputFieldTag.replaceWith(taskField1)
            taskField = taskField1

        }
    })
    
    })
    
})

})