import chalk from "chalk";
import fs from "fs";

function getElement(pathDoc) {
  const encoding = "utf-8";
  fs.readFile(pathDoc, encoding, (_, data) => {
    console.log(chalk.green(data));
  });
}

getElement("./arquivos/texto1.md");
