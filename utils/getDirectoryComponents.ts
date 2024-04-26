const fs = require("fs");
const path = require("path");

const main = async () => {
  const directoryPath = path.resolve(process.cwd(), "..", "ui");
  console.log(directoryPath);
  try {
    const directories: string[] = [];
    const data: {
      id: string;
      name: string;
      allComponents: string[];
    }[] = [];
    const items = await fs.promises.readdir(directoryPath);
    console.log(items);
    for (const item of items) {
      const itemPath = path.join(directoryPath, item);
      const stats = await fs.promises.stat(itemPath);
      if (stats.isDirectory()) {
        directories.push(item);
      }
    }

    for (const directory of directories) {
      const componentDir = path.join(process.cwd(), "..", "ui", directory);
      console.log(componentDir);
      const componentFiles = await fs.promises.readdir(componentDir);
      const fileNamesWithoutExtensions = componentFiles.map(
        (fileName) => path.parse(fileName).name,
      );
      data.push({
        id: directory.toLowerCase(), // Menggunakan nama direktori sebagai ID
        name: directory.toLowerCase(), // Menggunakan nama direktori sebagai nama komponen
        allComponents: [...fileNamesWithoutExtensions],
      });
    }

    const jsonData = JSON.stringify(data, null, 2);
    const constantFolderPath = path.join(process.cwd(), "..", "constant");
    const filePath = path.join(constantFolderPath, "jsonDataDirectory.tsx");

    // Membuat folder constant jika belum ada
    if (!fs.existsSync(constantFolderPath)) {
      fs.mkdirSync(constantFolderPath);
    }

    fs.writeFileSync(
      filePath,
      `const jsonDataDirectory = ${jsonData};\n\nexport default jsonDataDirectory;\n`,
    );

    console.log("jsonDataDirectory.tsx successfully created.");
  } catch (err) {
    console.error("Error:", err);
  }
};

main();
