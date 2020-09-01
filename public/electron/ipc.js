const { ipcMain, remote } = require('electron');

exports.ipc = (win, app) => {
    ipcMain.on('close', (e) => {
        app.quit();
    });
    ipcMain.on('minimize', (e) => {
        win.minimize();
    });
    // load settings app ----------------------------------------------------------------------------------------- >
};
