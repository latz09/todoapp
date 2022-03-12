const userInputs = document.querySelectorAll('input');
const addToDoBtn = document.getElementById('addToList');
const listRoot = document.getElementById('todo-list');

const toDos = [];

const clearToDoInputs = () => {
	for (const usrInput of userInputs) {
		usrInput.value = '';
	}
};

const getInput = () => {
	newToDo = {
		id: Math.random().toString(),
		title: userInputs[0].value,
		date: userInputs[1].value,
		notes: userInputs[2].value,
	};
	return newToDo;
};

const createElement = (func) => {
	func = getInput();
	const toDoElement = document.createElement('li');
	toDoElement.className =
		'primarybox hover:bg-amber 700 hover:shadow-md hover:shadow-amber-400';
	toDoElement.innerHTML = `
        <div class="m-2 mx-auto grid grid-cols-12 space-y-4">
            <h1 class="col-span-4 stamp text-center">${func.title}</h1>
            <p class="col-span-5 notes">
           ${func.notes}
            </p>
            <p class="notes col-span-3">${func.date}</p>        
        </div>         
    `;
	return toDoElement;
};

const handleClick = () => {
	let item = createElement();
	listRoot.append(item);
    toDos.push(item);
    clearToDoInputs();
};

addToDoBtn.addEventListener('click', handleClick);


//JUST FINISHED GETTING  TODOS ONTO THE PAGE.

//SEE IF YOU CAN CREATE AN APP.INIT()
//THEN GO FO DELETING