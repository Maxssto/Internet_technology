const table = document.querySelector(".table-body");

let timer = 1000;

let timerId = setTimeout(function request() {
  const tr = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    const td = document.createElement("td");
    td.innerText = (Math.random() * 10000000000000000).toFixed();
    tr.appendChild(td);
  }
  table.appendChild(tr);
  timerId = setTimeout(request, timer);
}, timer);

document.getElementById("confirm").addEventListener("click", () => {
  if (document.getElementById("set-timer").value !== "") {
    timer = 1000*document.getElementById("set-timer").value;
  }
  document.getElementById("set-timer").value = "";
});
