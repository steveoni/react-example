import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import './navMenu.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
/* eslint-disable */ 
class MenuExample extends React.Component{
	constructor(props){
		super(props);

		this.state = {focus:0};
	}

	clicked(index){

		this.setState({focused: index});
	}

	render(){
		var self = this;

		return(
			<div>
				<ul>
					{ this.props.items.map((m,index)=>{
						var style = '';

						if(self.state.focused === index){
							style = 'focused';
						}

						return <li className={style} onClick={self.clicked.bind(self,index)}>{m}</li>

					})}
				</ul>
					<p>Selected: {this.props.items[this.state.focused]}</p>
			</div>
			);
	}
}

//ReactDOM.render(
  //  <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
    //document.getElementById('container')
//);
