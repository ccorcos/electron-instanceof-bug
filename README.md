# Electron instanceof Bug.

When electron passes objects between main/preload/render processes, it changes the class instances making `instanceof` behave unexpectedly.


This is the result of my experiments:
```
main:MyValue instanceof preload:MyValue false
preload:MyValue instanceof preload:MyValue true
renderer->preload:MyValue instanceof preload:MyValue true
main:MyValue instanceof renderer:MyValue false
preload:MyValue instanceof renderer:MyValue false
renderer:MyValue instanceof renderer:MyValue true
```

Note that everything seems to work just fine with `Date`.
```
main:Date instanceof preload:Date true
main:Date instanceof renderer:Date true
preload:Date instanceof preload:Date true
preload:Date instanceof renderer:Date true
renderer:Date instanceof renderer:Date true
renderer:Date instanceof preload:Date true
```

## Steps to reproduce

```
npm install
npm run build
npm start
```