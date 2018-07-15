<div align="center">
  <a href="https://github.com/appalaszynski/pizza-builder">
    <img src="https://user-images.githubusercontent.com/35331661/42723051-d7822b44-8756-11e8-8a2f-6a233e35dffa.png" height="125px">
  </a>
  <h1>Pizza Builder</h1>
  <p>
    <em>Application Written in Vanilla JavaScript, Using MVC Pattern and Bootstrap</em>
  </p>
  <br>
</div>

**Pizza Builder** is MVC application written in pure JavaScript. Development workflow is based on Webpack - it is responsible for generating HTML file, converting ES6+ JavaScript code into plain old ES5, compiling Sass, running development server and generating minified build.

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)

---

## Installation

Clone the repo and install dependencies.

```bash
$ git clone https://github.com/appalaszynski/pizza-builder.git
$ cd pizza-builder
$ npm install                          
```
---

## Usage

### Running Development Server

```bash
$ npm run serve:dev                 
```

Then open [http://localhost:8080](http://localhost:8080) to see your app.

### Deploying Locally

```bash
$ npm run build:dev # Build in development mode
$ npm run build:prod # Build in production mode (minified files versions, external stylesheets)
```

---

## Contributing

All contributions and suggestions are welcome! For suggested improvements, please create an [issue](https://github.com/appalaszynski/pizza-builder/issues). For direct contributions, please [fork](https://github.com/appalaszynski/pizza-builder/fork) the repository, create your feature branch, commit your changes, push commits to the branch and create a new [pull request](https://github.com/appalaszynski/pizza-builder/pulls).
