// querySelector(getElementById 등등) -> document 요소 찾아줌
const h1 = document.querySelector("div.hello:first-child h1");

// addEventListener -> html 요소에 이벤트 추가 가능
function handleTitleClick() {
    // 아래 같이 직접 css를 수정 가능하지만 좋은 방식이 아님
    // h1.style.color = (h1.style.color === "blue") ? "tomato" : "blue";

    // css의 class를 수정하는 방식 -> class를 아예 교체해버려서 다른 css가 망가짐
    // 이거도 좋은 방식이 아님
    // h1.className = (h1.className === clickedClass) ? "" : clickedClass;

    // classList -> class를 담고 있는 배열인데 class 추가, 삭제 등등이 가능함
    // const clickedClass = "clicked";
    // if (h1.classList.contains(clickedClass))
    //     h1.classList.remove(clickedClass);
    // else
    //     h1.classList.add(clickedClass);

    // toggle -> class가 안에 있으면 삭제, 없으면 추가
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
