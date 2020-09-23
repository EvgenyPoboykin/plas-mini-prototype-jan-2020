const { autoUpdater } = require('electron-updater');

exports.AppUpdater = (mainWindow) => {
    const url = {
        token: process.env.ELECTRON_GIT_TOKEN,
        provider: process.env.ELECTRON_GIT_PROVIDER,
        owner: process.env.ELECTRON_GIT_OWNER,
        repo: process.env.ELECTRON_GIT_REPO,
    };

    autoUpdater.setFeedURL(url);
};
