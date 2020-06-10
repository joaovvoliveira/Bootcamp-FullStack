/*
  Obter usuário
  Obter telefone por id
  Obter endereco por id
*/

const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}
function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      return resolve({
        telefone: "988007999",
        ddd: "15",
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Bobos",
      numero: 120,
    });
  }, 2000);
}
function main(){
  
}

// const usuarioPromise = obterUsuario();
// usuarioPromise
//   .then((usuario) => {
//     return obterTelefone(usuario.id).then(function resolverTelefone(result) {
//       return {
//         usuario: {
//           id: usuario.id,
//           nome: usuario.nome,
//         },
//         ddd: result.ddd,
//         telefone: result.telefone,
//       };
//     });
//   })
//   .then(function (resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id);
//     return endereco.then(function resolverEndereco(result) {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result.endereco,
//       };
//     });
//   })
//   .then(function (resultado) {
//     console.log(` 
//     Nome: ${resultado.usuario.nome}
//     Endereco: ${result.endereco.rua}
//     Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}`);
//   })
//   .catch((error) => console.error("Deu ruim", error));

// function resolverUsuario(erro, usuario) {
//   console.log("usuario", usuario);
// }

// obterUsuario(function resolverUsuario(erro, usuario) {
//   if (erro) {
//     console.error("deu ruim em usuário", erro);
//     return;
//   }
//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error1) {
//       console.error("deu ruim no telefone", error1);
//       return;
//     }
//     obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
//       if (erro2) {
//         console.error("deu ruim no endereco", error2);
//         return;
//       }

//       console.log(`
//       Nome: ${usuario.nome},
//       Rua: ${endereco.rua},
//       Telefone: (${telefone.ddd})${telefone.telefone}
//       `);
//     });
//   });
// });

// const telefone = obterTelefone(usuario.id);

// console.log("usuario", usuario);
// console.log("telefone", telefone);
