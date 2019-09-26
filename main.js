const { app, BrowserWindow } = require('electron')

let mainWindow
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800, height: 600, show: false, webPreferences: { nodeIntegration: true }
    })
    mainWindow.loadFile('src/index.html')
    mainWindow.once('ready-to-show', () => {
        mainWindow.setMenu(null)
        mainWindow.show(true)
    })
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})