const fs = require('fs');

fs.writeFile('example.txt', 'Hello, world!', (err) => {
  if (err) {
    console.error('An error occurred while creating the file:', err);
  } else {
    console.log('File created successfully!');
  }
});
