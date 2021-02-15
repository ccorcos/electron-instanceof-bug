// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// MyValue class from Preload
const MyValueFromPreload = window['MyValue']

const fromMain = window['fromMain']
console.log(
  'main:MyValue instanceof preload:MyValue',
  fromMain instanceof MyValueFromPreload
)

const fromPreload = window['fromPreload']
console.log(
  'preload:MyValue instanceof preload:MyValue',
  fromPreload instanceof MyValueFromPreload
)

const fromRendererUsingPreload = new MyValueFromPreload(1)
console.log(
  'renderer->preload:MyValue instanceof preload:MyValue',
  fromRendererUsingPreload instanceof MyValueFromPreload
)

// MyValue class compiled in the renderer.
const { MyValue } = require('./shared')
console.log(
  'main:MyValue instanceof renderer:MyValue',
  fromMain instanceof MyValue
)

console.log(
  'preload:MyValue instanceof renderer:MyValue',
  fromPreload instanceof MyValue
)

const fromRenderer = new MyValue(1)
console.log(
  'renderer:MyValue instanceof renderer:MyValue',
  fromRenderer instanceof MyValue
)

// Date
const PreloadDate = window['PreloadDate']

const fromMainDate = window['fromMainDate']
console.log(
  'main:Date instanceof preload:Date',
  fromMainDate instanceof PreloadDate
)
console.log('main:Date instanceof renderer:Date', fromMainDate instanceof Date)

const fromPreloadDate = window['fromPreloadDate']
console.log(
  'preload:Date instanceof preload:Date',
  fromPreloadDate instanceof PreloadDate
)
console.log(
  'preload:Date instanceof renderer:Date',
  fromPreloadDate instanceof Date
)

const rendererDate = new Date()
console.log(
  'renderer:Date instanceof renderer:Date',
  rendererDate instanceof Date
)

const rendererPreloadDate = new PreloadDate()
console.log(
  'renderer:Date instanceof preload:Date',
  rendererPreloadDate instanceof Date
)
