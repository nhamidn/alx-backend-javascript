const { stdin: input, stdout: output } = require('node:process');

output.write('Welcome to Holberton School, what is your name?\n');

input.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

input.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
