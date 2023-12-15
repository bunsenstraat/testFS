import fs from "fs";

// create 10000 directories in test directory and put a text file in each directory
for (let i = 0; i < 10000; i++) {
  try {
    fs.mkdirSync(`./test/${i}`);
  } catch (e) {}
  try {
    fs.writeFileSync(`./test/${i}/test.txt`, "Hello World");
  } catch (e) {}
}
