function insert(num) {
  document.querySelector(".textview").value += num;
}

function equals() {
  const value = document.querySelector(".textview").value;

  if (value.includes("/")) {
    const devide = value.split("/");
    console.log(devide);
    document.querySelector(".textview").value = devide[0] / devide[1];
  }

  if (value.includes("*")) {
    const multiply = value.split("*").reduce((acc, el, i) => {
      return acc * Number(el);
    }, 1);
    document.querySelector(".textview").value = multiply;
  }

  if (value.includes("+")) {
    const addition = value.split("+").reduce((acc, el, i) => {
      return acc + Number(el);
    }, 0);
    document.querySelector(".textview").value = addition;
  }

  if (value.includes("-")) {
    const subtract = value.split("-");
    document.querySelector(".textview").value = subtract[0] - subtract[1];
  }

  if (value.includes("%")) {
    const percentage = value.split("%");
    document.querySelector(".textview").value =
      (percentage[0] / 100) * percentage[1];
  }
}

function clean() {
  document.querySelector(".textview").value = "";
}

let clearVal;
function back() {
  const valString = document.querySelector(".textview").value;

  clearVal = [...valString.split("")];
  clearVal.pop();

  document.querySelector(".textview").value = clearVal.join("");
}
