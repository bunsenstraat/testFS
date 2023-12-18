import fs from "fs";

// create 10000 directories in test directory and put a text file in each directory
for (let i = 0; i < 500; i++) {
  try {
    fs.mkdirSync(`./test`);
  } catch (e) {

  }
  try {
    fs.writeFileSync(`./test/test${i}.txt`, "Hello World");
  } catch (e) {
    console.log(e);
  }
}
