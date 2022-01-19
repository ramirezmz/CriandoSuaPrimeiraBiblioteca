import chalk from "chalk";
import fs from "fs";

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Nao ha arquivos no caminho"));
}

function getElement(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(texto))
    .catch((erro) => trataErro(erro));
}

// function getElement(pathDoc) {
//  const encoding = "utf-8";
//  fs.readFile(pathDoc, encoding, (erro, data) => {
//        if (erro) {
//      trataErro(erro);
//    }
//    console.log(chalk.green(data));
//  });
//}

getElement("./arquivos/texto1.md");
