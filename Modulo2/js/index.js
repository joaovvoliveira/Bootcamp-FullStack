window.addEventListener("load", () => {
  fetchi();
});
//prettier-ignore
async function fetchi() {
  const res = await fetch("https://github.com/felipefdl/cidades-estados-brasil-json");
  const json = await res.json()
  const cidades = json;

  console.log(cidades)
}
