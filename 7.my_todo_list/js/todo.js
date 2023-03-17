const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

// ToDo를 담을 배열 생성
let toDos = [];

// local storage에 todo-list 저장
function saveToDos() {
  // 문자열 배열로 저장하기 위해 JSON.stringify 사용
  // a, b -> ["a", "b"]
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 버튼이 여러개가 생겨서, 눌러진 버튼이 뭔지를 파악해야 되서 event가 필요함
function deleteToDo(event) {
  // 부모 요소를 찾아서 삭제해버림 -> <li><span></span></li> 형태라 li를 지움
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  // html li 요소 생성
  // return <li><span>{newTodo.text}</span><button onClick={deleteToDo}/></li>
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  // Todo 삭제 버튼
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  // li 안에 span, button 추가 -> 아래와 같음
  // <li><span></span><button></button></li>
  li.appendChild(span);
  li.appendChild(button);

  // 기존 html에 있던 todo-list ul 요소 안에 li 삽입
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // 기존 todo가 있으면 그대로 사용
  toDos = parsedToDos;
  // parsedToDos.forEach((todo) => paintToDo(todo));
  parsedToDos.forEach(paintToDo);
}
