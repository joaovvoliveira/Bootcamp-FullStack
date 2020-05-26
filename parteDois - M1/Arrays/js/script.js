window.addEventListener("load", () => {
  const divTimer = document.querySelector("#divTimers");
  divTimer.textContent = count;
  contagem();
});
let count = 0;
function contagem() {
  const cont = setInterval(() => {
    divTimer.textContent = ++count;
    console.log(divTimer);
  }, 1000);
}

/*
function doMap() {
  const homens = people.results
    .map((person) => {
      return {
        status: person.name.title,
        nome: person.name.first,
      };
    })
    .filter((person2) => {
      return person2.status === 'Mr';
    });
  console.log(homens);

  const mulheres = people.results
    .map((person) => {
      return {
        status: person.name.title,
        nome: person.name.first,
      };
    })
    .filter((person2) => {
      return person2.status === 'Ms';
    });
  console.log(mulheres);

  const marriedPeoples = [...mulheres, ...homens];
  console.log(marriedPeoples);
}

function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });
  console.log(every);
}

function doReduce() {
  const total = people.results.reduce((acc, cur) => {
    return acc + cur.dob.age;
  }, 0);
  console.log(total);
}

function doMap() {
  const nomes = people.results.map((banana) => {
    return {
      nome: banana.name.first,
      sobre: banana.name.last,
    };
  });
  return nomes;
}

function insertInitial() {
  const map = people.results
    .map((person) => {
      return {
        nome: person.name.first,
      };
    })
    .filter((person1) => {
      return person1.nome.startsWith('A');
    });
  console.log(map);
}

.forEach((person2) => {
  person2.Initial = 'A';
});
function doFilter() {
  const var1 = people.results.filter((person) => {
    return person.name.first.length < 5;
  });
  console.log(var1);
};

function doFilter() {
  const var2 = people.results.filter((person) => {
    return person.name.title === 'Mr' || person.name.title === 'Ms';
  });
  console.log(var2);
}

function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });

  console.log(olderThan50);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);

  const totalAges = people.results.reduce((acc, cur) => {
    return acc + cur.dob.age;
  }, -6);

  console.log(totalAges);
  let sumAges = 0;
}
for (let i = 0; i < people.results.length; i++) {
  var current = people.results[i];
  sumAges += current.dob.age;
}

console.log(sumAges);

function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });

  console.log(found);
}

function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });

  console.log(found);
}

function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });

  console.log(every);
}

function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith('A'))
    .sort((a, b) => {
      return b.name.length - a.name.length;
      // return a.name.localeCompare(b.name);
    });

  console.log(mappedNames);
}
*/
