# Todo App

A simple todo app using vanilla javascript. This repo is used for teaching in Javascript course.

- Render todo list 
- Add a new todo 
- Update a todo 
- Remove a todo 
- Search todo 


1. Comment the script `sample-solution.js` in `index.html`
2. Implement logic in `main.js` to make the todo app works.

Demo: https://paulnguyen-mn.github.io/js-todo-app/

## Render todo list 

- Given a list of todos as below:

```js
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
```

TODO: Convert this todo list to list of `li` which is cloned from `todoItemTemplate` element. Then append to `ul#todoList` element.

## Add a new todo 

- Handle todo form submit.
- Build a new todo with title retrieved from user input.
- Append to todo list.

## Edit a todo 

- Fill form values on Edit button click.
- On form edit submit, update the new value to the corresponding todo item.

## Remove a todo 

- Show a confirmation to ask if user wants to process or not?
- If yes:
  - Remove the todo from the todo list (javascript variable)
  - Remove the li element from ul (dom)


## Search a todo

- Add a new form which is similar to add/edit form having one text field control.
- When user change the value of the text fields:
  - Search and filter out the todo list whose title contains the search term.

Eg: 
- We have a list of todo: 'Learn JS', 'Study JS'
- If you input `js` --> show the two todos.
- If you input `learn` --> show only the first one.


## Refs 

- Somw useful function: https://gist.github.com/paulnguyen-mn/3f7ef03a31c5e3fad19ac1a5cf7dd708
- Part 2 of this tutorial: https://javascript.info/


HAPPY CODING! :heart_eyes:
