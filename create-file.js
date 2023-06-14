const fs = require('fs');

const now = new Date().getTime();
fs.writeFile(`example+${now}.txt`, 'Hello, world!', (err) => {
  if (err) {
    console.error('An error occurred while creating the file:', err);
  } else {
    console.log('File created successfully!');
  }
});
