# React simple example in ES6

This examples are from [tutorialzine](http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/). but rewritten in ecma6.

The code are not documented: so visit the tutorialzine to fully understand what the code is all about.

## .React ecma6 essentials

* Component:- each class in react is a component, extending the React.Component. so to do these we import the 
react component:
```javascript
import React from 'react'
```
* constructor and super: since a new component is always a class, it always have a constructor to declare the initial. but not every time you need it: but you will always used it. if constructor is used inthe react component,`super` must also be called. super is used since your react component is a child of the React.Component(parent). 

note: super must always be declare before declare any initials in the constructor.
the super and constructor take inthe `props` as a parameter, to seal the props to the component.

```javascript
class component extends React.Component{
  constructor(props){
    super(props);
  }
}
```
the code above is similar to the code declare below in tutotrialzine when to using es6

```javasript
var component = React.createClass({
  getInitial:function(){

  }
});
```
 this.state : is an object which contain initial that we be render to the dom
```javascript
class component extends React.Component{
  constructor(props){
    super(props);

    this.state ={value:}
  }
}
```
also similar to these same code inthe tutorial
```javasript
var component = React.createClass({
  getInitial:function(){

    return {value:}
  }
});
```
* use of bind() : bind is used to bind the `this` keyword to the function that will be declare inthe eventlistener
```javascript
class component extends React.Component{
  constructor(props){
    super(props);

    this.state ={value:};
    this.handle = this.handle.bind(this)l
  }
  handle(){

  }
  render(){
      return(
        <input onClick={this.handle} />
        );
  }
}
```
This are the little changes made to the example code.
