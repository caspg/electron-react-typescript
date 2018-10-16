import { app, BrowserWindow } from 'electron'
import * as path from 'path'

let window: BrowserWindow | null

function createWindow() {
  window = new BrowserWindow({ width: 800, height: 600 })

  window.loadFile(path.join(__dirname, '..', 'index.html'))

  window.webContents.openDevTools()

  window.on('closed', () => {
    window = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
  app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})
