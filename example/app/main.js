'use strict';

/* eslint-disable no-path-concat, import/no-unresolved */

const { app, BrowserWindow } = require('electron');
const updater                = require('electron-simple-updater');


console.log('TCE: updater', updater);
updater.init({
  checkUpdateOnStart: false,
  autoDownload: false,
});

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
  }
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
   // Open the DevTools.
   mainWindow.webContents.openDevTools()
});
