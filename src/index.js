import ExampleScene from "./ExampleScene";
import './style.css';
import Icon from './icon.png';
import _ from 'lodash';
import printMe from "./print";

function component() {
    
  let exampleScene = new ExampleScene();
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    
    
    var btn = document.createElement('div');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    
    return element;
  }

  document.body.appendChild(component());


