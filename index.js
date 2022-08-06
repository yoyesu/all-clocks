const clockContainer = document.querySelector(".clock-container");

function clockSetter() {
  const date = new Date();
  ///////////////adding zeros to hours < 10///////////////////
  function addZeros(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let hours = date.getHours();
  let partOfDay = "AM";

  /////////////////////////changing to 12h format///////////////////////////
  if (hours == 24) {
    hours = hours - 12;
  } else if (hours >= 22) {
    hours = hours - 12;
    partOfDay = "PM";
  } else if (hours > 12) {
    hours = `0${hours - 12}`;
    partOfDay = "PM";
  }

  const minutes = addZeros(date.getMinutes());
  const seconds = addZeros(date.getSeconds());

  clockContainer.textContent = `${hours}:${minutes}:${seconds} ${partOfDay}`;

  setTimeout(clockSetter, 1000); //making it count!
}

clockSetter();
