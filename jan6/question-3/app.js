import os from "os";
import fs from "fs";

// PART A – OS Module
console.log("Free Memory:", os.freemem());
console.log("CPU Cores:", os.cpus().length);

// PART B – FS CRUD (IN ORDER)

// 1. Create data.txt
fs.writeFile("data.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("data.txt created");

  // 2. Create Readme.md
  fs.writeFile(
    "Readme.md",
    "# This is first line in Readme",
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Readme.md created");

      // 3. Read data.txt
      fs.readFile("data.txt", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("data.txt content:", data);

        // 4. Append to data.txt
        fs.appendFile("data.txt", "\nThis is second line", (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Data appended");

          // 5. Delete Readme.md
          fs.unlink("Readme.md", (err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Readme.md deleted");
          });
        });
      });
    }
  );
});