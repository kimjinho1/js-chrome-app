// document에 html 내용들이 오브젝트로 싹다 담겨있음
// js에서 document 참조, 수정이 가능함
// querySelector(getElementById 등등) -> document 요소 찾아줌
const h1 = document.querySelector("div.hello:first-child h1");

// addEventListener -> html 요소에 이벤트 추가 가능
function handleTitleClick() {
    h1.innerText = "click";
    const colors = ["red", "green", "blue"];
    h1.style.color = colors[Math.floor(Math.random() * colors.length)];
    console.log("h1 was clicked!");
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!"
}

// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// window -> document 같은 친구인데 화면 크기 수정, 복사 등등의 이벤트 처리 가능
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copy!");
}

// 개발자 도구 ->  network -> No Throtting
function handleWindowOffline() {
    alert("SOS no WIFI!");
}

function handleWindowOnline() {
    alert("Good!");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);