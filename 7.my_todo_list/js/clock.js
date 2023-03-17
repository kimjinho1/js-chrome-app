const clock = document.querySelector(".clock");

function getClock() {
  // Date 객체로 시간 관련된 내용 얻을 수 있음
  const date = new Date();
  // 2자리 일때는 괜찮은데 1자리 수면 01이 아니라 1로 나옴 -> padStart로 해결
  //   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
