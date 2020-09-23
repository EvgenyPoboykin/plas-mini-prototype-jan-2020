// Basic init
// const jsPDF = require('jspdf');
const path = require('path');

const electron = require('electron');
const { autoUpdater } = require('electron-updater');

const { app } = electron;

const { CreateWin } = require(path.join(__dirname, './window.js'));

app.on('ready', () => {
    CreateWin(app);

    setTimeout(() => autoUpdater.checkForUpdatesAndNotify(), 3000);
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
