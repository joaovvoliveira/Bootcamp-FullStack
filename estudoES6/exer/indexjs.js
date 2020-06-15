window.addEventListener("load", () => {
  function test4() {
    const array = [{ name: "Ralph" }, { name: "Amanda" }, { name: "Theo" }];

    array.forEach((i, index) => {
      i = { ...i, j: i.name.length };
      array[index] = i;
    });

    console.log(array);
  }
  test4();

  const classDestaque = Array.from(document.querySelectorAll(".destaque"));

  function test1(a) {
    let x = 0;

    for (let i = 1; i <= a; i++) {
      x += i;
    }
    console.log(x);
  }

  test1(6);

  function test3() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    return array.map((i) => i ** 2);
  }
  console.log(test3());
});
