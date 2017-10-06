semita
========

<p align="center">
  <a href="https://www.npmjs.com/package/semita"><img alt="NPM Version" src="https://img.shields.io/npm/v/semita.svg?style=flat"></a>
  <a href="https://www.npmjs.org/package/semita"><img alt="NPM downloads" src="https://img.shields.io/npm/dt/semita.svg?style=flat"></a>
  <a href="https://david-dm.org/yashag/semita"><img alt="Dependency status" src="https://david-dm.org/yashag/semita.svg?style=flat"></a>
  <a href="https://github.com/yashag/semita/blob/master/LICENSE"><img src="https://img.shields.io/github/license/yashag/semita.svg"></a>
</p>

> A visual hierarchy mapping tool

## What is semita for?
Semita is a tool for visually representing hierarchical data, with an emphasis on branching and paths highlighting.
Each branch that splits from the starting point will be colored in a different color so the hierarchy is very noticeable.
In addition this tool is intended for serving as a base for other and more specific packages (like file structures pretty output).

<p align="center">
  <img alt="Semita example" src="https://raw.githubusercontent.com/yashag/semita/master/assets/images/example1.PNG" width="700">
</p>

## Install
Install with [npm](https://www.npmjs.com/package/semita):

```sh
$ npm install --save semita
```

## Usage

```js
const semita = require('semita');

const dataToVisualize = {
  "title": "Starting point",
  "content": "start",
  "className": "semita-start-point",
  "children": [
    { "title": "title1",
      "content": "content1",
      "children": [
        { "title": "title1-child1", "content": "content1-child1"},
        { "title": "title1-child2", "content": "content1-child2"},
        { "title": "title1-child3", "content": "content1-child3"}
      ]
    },
    { "title": "title2",
      "content": "content2"
    },
    {
      "title": "title3",
      "content": "content3",
      "children": [
          { "title": "title3-child1", "content": "content3-child1" }
      ]
    },
    {
      "title": "title4",
      "content": "content4",
      "children": [
          { "title": "title4-child1", "content": "content4-child1" }
      ]
    }
  ]
}

semita(dataToVisualize, {
    reportTitle: 'My Report',
    reportName:  'my-report'
});
```

Here is the result:

<p align="center">
  <img alt="Semita usage example" src="https://raw.githubusercontent.com/yashag/semita/master/assets/images/example2.PNG" width="500">
</p>

## API
------

`semita(data, [options])`

#### Params:
* data - The data should be a hierarchical json where each node includes a `title` and a `content` property.
In addition each node can have a property called `children` which is essentially an array of child nodes.
___Important___ : It is recommended for the first node to have the follow key-value pairing
```js
  "className": "semita-start-point",
```
* options (optional) - An `object` that may include the following properties:

| Option | Deafult | Description |
| ------ | ------- | ----------- |
| reportTitle | `Semita Report` | The html title of the outputted report |
| reportDir | `__dirname` | The directory to which the report should be written to |
| reportName | `semita-report` | The name of the report directory |

## TODO

These are the plans for the future:

* Tooltips for larger contents
* Hierarchy and image exports
* Minified version of the report
* Paths / Branches highlighting

## Credits

This project is heavily based on [orgchart](https://www.npmjs.com/package/orgchart), so I would like to thank their contributors for it!

## License

Copyright © 2017 Yasha Gootkin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.