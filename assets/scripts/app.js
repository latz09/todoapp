const userInputs = document.querySelectorAll('input');
const addToDoBtn = document.getElementById('addToList');

const clearToDoInputs = () => {
	for (const usrInput of userInputs) {
		usrInput.value = '';
	}
};

//======= create click button. push to todos array. render new todo ======//
const toDos = [];


const submitToDoHandler = () => {
	const titleValue = userInputs[0].value;
	const dateValue = userInputs[1].value;
	const notesValue = userInputs[2].value;

	const newToDo = {
		id: Math.random().toString(),
		title: titleValue,
		date: dateValue,
		notes: notesValue,
	};
	toDos.push(newToDo);
	renderNewTodo(newToDo.title, newToDo.date, newToDo.notes, newToDo.id);
	clearToDoInputs();
};

//======= create a new todo element from user inputs =======//
const renderNewTodo = (a, b, c, d) => {
	let id = d;
	const newToDoElement = document.createElement('li');
	newToDoElement.setAttribute('id', id);
	newToDoElement.className =
		'primarybox hover:bg-amber 700 hover:shadow-md hover:shadow-amber-400';
	newToDoElement.innerHTML = `
        <div class="m-2 mx-auto grid grid-cols-12 space-x-4">
            <h1 class="col-span-4 stamp text-center">${a}</h1>
            <p class="col-span-5 notes">
           ${c}
            </p>
            <p class="notes col-span-3">${b}</p>        
        </div>         
    `;
	

	// const listRoot = document.getElementById('todo-list');
	// listRoot.append(newToDoElement);
    return newToDoElement;

};

//===Delete todo =====//

addToDoBtn.addEventListener('click', submitToDoHandler);

/**
 * create a user collection function
 * 
 * 
 * 
 * Do i want to get rid of new to element and down and only return the newToDoElement
 * then have it closed and can manipulate everything that way?
 *
 *
 * append the newToDoElement somewhere.
 * plus create a list root again to append it
 * 
 * so now i have this newToDoElement with no even listener...where to put it.
 */
