// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const MyValueFromPreload = window['MyValue']
const fromMain = window['fromMain']
const fromPreload = window['fromPreload']
const fromRendererUsingPreload = new MyValueFromPreload(1)

console.log('fromMain', fromMain instanceof MyValueFromPreload, fromMain)
console.log(
  'fromPreload',
  fromPreload instanceof MyValueFromPreload,
  fromPreload
)
console.log(
  'fromRendererUsingPreload',
  fromRendererUsingPreload instanceof MyValueFromPreload,
  fromRendererUsingPreload
)

const { MyValue } = require('./shared')
const fromRenderer = new MyValue(1)
console.log('fromMain', fromMain instanceof MyValue, fromMain)
console.log('fromPreload', fromPreload instanceof MyValue, fromPreload)
console.log('fromRenderer', fromRenderer instanceof MyValue, fromRenderer)
