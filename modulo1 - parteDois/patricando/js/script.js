let listPeoples = [];
let listPeoplesSearch = [];
const allPeoples = null;
const divPessoas = document.querySelector("#divPeoples");
let homens = null;
let mulheres = null;
window.addEventListener("load", () => {
  const inputText = document.getElementById("exampleInputEmail1");
  inputText.addEventListener("keyup", buscarComEnter);

  listaPessoas();
});

async function listaPessoas() {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await res.json();
  listPeoples = json.results.map((person) => {
    const { name, picture, dob, gender } = person;
    return {
      fullName: name.first + " " + name.last,
      picture: picture.medium,
      age: dob.age,
      gender: gender,
    };
  });
  console.log(listPeoples);
  render();
}

function render() {}

function renderUsers() {
  let peoplesHTML = "<div>";

  listPeoples.forEach((person) => {
    const { fullName, picture, age, gender } = person;

    const personHTML = ` 
      <div class='person'>
      <div class='align'>
      <img src='${picture}'/>
      </div>
      <div class='align'>
      <span>${fullName}</span>
      </div>
      </div>   
      `;
    peoplesHTML += personHTML;
  });
  peoplesHTML += "</div>";
  divPessoas.innerHTML = peoplesHTML;
  console.log(listPeoples);
}

function buscarComEnter(event) {}
