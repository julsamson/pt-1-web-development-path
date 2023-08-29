const fs = require('fs');
const readline = require('readline');

const todoFile = 'todo.txt';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu() {
  console.log('\n===== To-Do List =====');
  console.log('1. View To-Do List');
  console.log('2. Add To-Do');
  console.log('3. Exit');
  rl.question('Select an option: ', handleMenuChoice);
}

function handleMenuChoice(choice) {
  switch (choice) {
    case '1':
      viewToDoList();
      break;
    case '2':
      rl.question('Enter a new to-do: ', addToDo);
      break;
    case '3':
      rl.close();
      break;
    default:
      console.log('Invalid choice.');
      displayMenu();
  }
}

function viewToDoList() {
  fs.readFile(todoFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading to-do list:', err);
    } else {
      const tasks = data.split('\n').filter(task => task.trim() !== '');
      console.log('\n===== To-Do List =====');
      tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
    }
    displayMenu();
  });
}

function addToDo(newToDo) {
  fs.appendFile(todoFile, newToDo + '\n', err => {
    if (err) {
      console.error('Error adding to-do:', err);
    } else {
      console.log('To-Do added successfully.');
    }
    displayMenu();
  });
}

displayMenu();
