const userInputs = document.querySelectorAll('input');


const clearToDoInputs = () => {
  for (const usrInput of userInputs) {
      usrInput.value = ''
  }
}

//======= create click button. push to todos array. render new todo ======//
const addToDoBtn = document.querySelector('button');

const toDos = []

const submitToDoHandler = () => {
	const titleValue = userInputs[0].value;
	const dateValue = userInputs[1].value;
	const notesValue = userInputs[2].value;

    const newToDo = {
        id: Math.random().toString(),
        title: titleValue,
        date: dateValue,
        notes: notesValue
    }
    toDos.push(newToDo);
    renderNewTodo(newToDo.title, newToDo.date, newToDo.notes)
    clearToDoInputs()
      
    
};

addToDoBtn.addEventListener('click', submitToDoHandler);

//======= create a new todo element from user inputs =======//
const renderNewTodo = (a, b, c) => {    
	const newToDoElement = document.createElement('li');
	newToDoElement.className =
		'primarybox hover:bg-amber 700 hover:shadow-md hover:shadow-amber-400';
	newToDoElement.innerHTML = `
        <div class="m-2 mx-auto grid grid-cols-7 space-x-4">
            <h1 class="col-span-2 stamp text-center">${a}</h1>
            <p class="col-span-3 notes">
           ${c}
            </p>
            <p class="notes">Finish by: <span>${b}</span></p>
        </div>   
    `;
	const listRoot = document.getElementById('todo-list');
	listRoot.append(newToDoElement);
};


