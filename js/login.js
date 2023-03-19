const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// form 안에 submit 타입의 button을 누르면 submit 이벤트가 발생되서 창이 새로고침됨
// form의 기본 동작임
// 그런데 우리는 종종 브라우저의 기본 동작을 막을 필요가 있음 -> preventDefault 사용
function onLoginSubmit(event) {
  // 브라우저의 기본 동작(form의 경우) 새로고침을 막음
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // localStorage를 통해 브라우저에 {key: value} 형태로 저장 가능
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);

  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (5 <= hour && hour < 12) {
    return "Morning";
  } else if (12 <= hour && hour < 17) {
    return "Afternoon";
  } else {
    return "Evening";
  }
}

function paintGreetings(username) {
  const t = getTimeOfDay();
  greeting.innerText = `Good ${t}, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // 아래에서 onLoginSubmit에 이벤트에 대한 정보를 매개변수로 넣어주고 있음!
  // -> js는 매개변수 하나면 함수에 알아서 들어감
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
