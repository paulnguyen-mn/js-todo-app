import todoFormUtils, { getFormValues, hello } from './todoForm.js';
// import todoFormUtils from './todoForm.js';

todoFormUtils.hello();


const handleTodoEdit = () => {
  console.log('Edit ne');
};

const handleTodoDelete = (todo, todoElement) => {
  // Confirm user to delete
  const confirmMessage = `Are you sure to delete "${todo.title}"`;
  if (window.confirm(confirmMessage)) {
    console.log('Delete todo: ', todo, todoElement);
    // TODO: Remove todo from todo list

    // Remove element from UI
    todoElement.remove();
  }
};


const buildTodoItem = (todo) => {
  // Find todo item template  
  const todoItemTemplate = document.querySelector('#todoItemTemplate');
  if (!todoItemTemplate) return null;

  // Clone template
  const todoItemFragment = todoItemTemplate.content.cloneNode(true);
  console.log(todoItemFragment);

  // Fill data: 
  // - Update li data-todo-id
  const todoElement = todoItemFragment.querySelector('li');
  if (todoElement) {
    todoElement.setAttribute('data-todo-id', todo.id.toString());
  }

  // - Update todo title
  const todoTitleElement = todoItemFragment.querySelector('#todoItemTitle');
  if (todoTitleElement) {
    todoTitleElement.innerText = todo.title;
    todoTitleElement.removeAttribute('id');
  }

  console.log(todoElement);

  // Add events
  const todoEditElement = todoElement.querySelector('#todoItemEdit');
  if (todoEditElement) {
    todoEditElement.addEventListener('click', handleTodoEdit);
    todoEditElement.removeAttribute('id');
  }

  const todoDeleteElement = todoElement.querySelector('#todoItemRemove');
  if (todoDeleteElement) {
    todoDeleteElement.addEventListener(
      'click',
      () => handleTodoDelete(todo, todoElement)
    );
    todoDeleteElement.removeAttribute('id');
  }

  // Return element
  return todoElement;
}



const renderTodoList = (todoList) => {
  // Validate
  // - Must be an array
  // - Find out ul element
  if (!Array.isArray(todoList)) return;

  const todoListElement = document.querySelector('#todoList');
  if (!todoListElement) return;

  for (const todo of todoList) {
    // Build todo item element
    const todoItemElement = buildTodoItem(todo);

    // Add to ul element
    todoListElement.appendChild(todoItemElement);
  }
};








// ----------------
// MAIN LOGIC
// ----------------
const todoList = [
  {
    id: 1,
    title: 'Learn JS NEW',
  },
  {
    id: 2,
    title: 'Code JS NEW',
  }
];
renderTodoList(todoList);

// ---------------------------
// ADD TODO 

// const getFormValues = () => {
//   const todoForm = document.querySelector('#todoForm');
//   if (!todoForm) return {};

//   const formValues = {};
//   const controlNameList = ['title'];
//   for (const controlName of controlNameList) {
//     const controlSelector = `[name=${controlName}]`;
//     const control = todoForm.querySelector(controlSelector);
//     const controlValue = control ? control.value : control;

//     formValues[controlName] = controlValue;
//   }

//   return formValues;
// };

const handleTodoFormSubmit = (e, todoForm) => {
  console.log('Form submit: ', getFormValues());
  e.preventDefault();

  const formValues = getFormValues();
  const newTodo = {
    id: 3, // should be a random number
    ...formValues,
  };

  // Add to todoList
  todoList.push(newTodo);

  // Add new li element
  const todoListElement = document.querySelector('#todoList');
  if (todoListElement) {
    const todoElement = buildTodoItem(newTodo);

    if (todoElement) {
      todoListElement.appendChild(todoElement);
    }
  }

  todoForm.reset();
};

const todoForm = document.querySelector('#todoForm');
if (todoForm) {
  // todoForm.addEventListener('submit', e => handleTodoFormSubmit(e));
  todoForm.addEventListener('submit', e => handleTodoFormSubmit(e, todoForm));
}
