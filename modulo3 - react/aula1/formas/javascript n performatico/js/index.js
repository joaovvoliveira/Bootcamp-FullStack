const clickArray = [];
window.addEventListener("load", () => {
  console.log("JS OK");

  const button = document.querySelector("#btnClick");
  button.addEventListener("click", addTodo);
});

function addTodo() {
  clickArray.push(getNewMoment());
  render();
}
function render() {
  const ul = document.querySelector("#data");
  ul.innerHTML = "";
  let lis = "";

  clickArray.map((item) => {
    lis += `<li>${item}</li>`;
  });
  ul.innerHTML = lis;

  document.title = clickArray.length;
}
