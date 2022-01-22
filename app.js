const name = document.querySelector("#name");
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");
const tbody = document.querySelector("tbody");
const btn = document.querySelector("#btn");

const create = (element) => document.createElement(element);

btn.addEventListener("click", () => {
  if (name.value !== "" && date.value !== "" && amount.value !== "") {
    let tr = create("tr");
    let dataName = create("td");
    let dataDate = create("td");
    let dataAmount = create("td");
    let dataBtn = create("td");
    let del = create("input");
    del.setAttribute("type", "button");
    del.value = "x";
    let data = [dataName, dataDate, dataAmount, dataBtn];

    dataName.appendChild(document.createTextNode(name.value));
    dataDate.appendChild(document.createTextNode(date.value));
    dataAmount.appendChild(document.createTextNode(`$${amount.value}`));
    dataBtn.appendChild(del);

    for (i of data) {
      tr.appendChild(i);
      if (data.indexOf(i) === 0) {
        i.classList.add("first-row");
      } else if (data.indexOf(i) === 1) {
        i.classList.add("second-row");
      } else if (data.indexOf(i) === 2) {
        i.classList.add("third-row");
      } else {
        i.classList.add("btn-row");
      }
    }

    name.value = "";
    date.value = "";
    amount.value = "";

    tbody.appendChild(tr);

    del.addEventListener("click", (e) => {
      let toDel = document.querySelectorAll("tr");

      for (i of toDel) {
        if (i === e.target.parentElement.parentElement) {
          i.remove();
        }
      }
    });
  }
});
