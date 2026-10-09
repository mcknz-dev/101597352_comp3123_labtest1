const fs = require('fs');
const path = require('path');

const logsPath = path.join(process.cwd(), 'Logs');

// Remove Logs directory if it exists
if (fs.existsSync(logsPath)) {
    const files = fs.readdirSync(logsPath);

    files.forEach(file => {
        console.log('Deleting file:', file);
    });

    fs.rmSync(logsPath, { recursive: true, force: true });
    console.log('Logs directory removed.');
}

// Create Logs directory
fs.mkdirSync(logsPath, { recursive: true });

// Change current working directory to Logs
process.chdir(logsPath);

// Create 10 log files
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;

    fs.writeFileSync(fileName, `This is log file ${i}.`);

    console.log('Created file:', fileName);
}