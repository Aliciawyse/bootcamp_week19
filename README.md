# bootcamp_week19

## Getting started with React

I used a npm package called `create-react-app`. It helps set up our react application. The name of my app is `first-react-app`. I also installed [Material-UI](http://www.material-ui.com/#/), React components that implement Google's Material Design. 

## What we're working with (more details coming soon).

Looking at `index.js` we see 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavComponent from './NavComponent';
import Section from './Section';

const App = () => (
    <MuiThemeProvider>
        <NavComponent />
        <Section />
    </MuiThemeProvider>
);


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

```

`ReactDom` is a JavaScript library that contains several React specific methods. Here I'm using the render method. It takes two arguments. The first is taking our JSX expression and adding it to the DOM. The second argument specifies where exactly on the DOM this JSX expression should go. In this case, it'll appear in the HTML element with an id of `root`. This element can be found in `index.html` in the public folder. 

```html
<body>
    <div id="root"></div>
</body>
```