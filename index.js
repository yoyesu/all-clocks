const clockContainer = document.querySelector(".clock-container");
const clockContainer2 = document.querySelector(".clock-container2");
const btn12 = document.getElementById("12h-clock");
const btn24 = document.getElementById("24h-clock");
let partOfDay = "AM";
btn12.addEventListener("click", () => {
  clockContainer2.classList.add("hidden");
  clockContainer.classList.remove("hidden");
  clearInterval(clockSetter24);
  setInterval(clockSetter12, 1000);
});
btn24.addEventListener("click", () => {
  clockContainer.classList.add("hidden");
  clockContainer2.classList.remove("hidden");
  clearInterval(clockSetter12);
  setInterval(clockSetter24, 1000);
});

function clockSetter12() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = addZeros(date.getMinutes());
  const seconds = addZeros(date.getSeconds());

  /////////////////////////changing to 12h format///////////////////////////
  if (hours == 0) {
    hours = 12;
  } else if (hours >= 22) {
    hours = hours - 12;
    partOfDay = "PM";
  } else if (hours > 12) {
    hours = `0${hours - 12}`;
    partOfDay = "PM";
  }

  return (clockContainer.textContent = `${hours}:${minutes}:${seconds} ${partOfDay}`);
}

function clockSetter24() {
  const date = new Date();
  const hours = addZeros(date.getHours());
  const minutes = addZeros(date.getMinutes());
  const seconds = addZeros(date.getSeconds());
  return (clockContainer2.textContent = `${hours}:${minutes}:${seconds}`);
}

///////////////adding zeros to hours < 10///////////////////
function addZeros(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
