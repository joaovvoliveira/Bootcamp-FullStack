const clickArray = [];
window.addEventListener("load", () => {
  console.log("JS OK");

  const button = document.querySelector("#btnClick");
  button.addEventListener("click", addTodo);
});

function addTodo() {
  const item = getNewMoment();

  clickArray.push(item);
  render(item);
}
function render(item) {
  const ul = document.querySelector("#data");
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
  document.title = clickArray.length;
}
