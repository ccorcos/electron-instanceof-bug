// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

const { ipcRenderer } = require('electron')
const { MyValue } = require('./shared')

window['fromMain'] = ipcRenderer.sendSync('getMyValue')
window['fromPreload'] = new MyValue(1)
window['MyValue'] = MyValue

window['fromMainDate'] = ipcRenderer.sendSync('getDate')
window['fromPreloadDate'] = new Date()
window['PreloadDate'] = Date
