import React from 'react';
import ReactDOM from 'react-dom';
import './orderForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
class ServiceChooser extends React.Component{
	constructor(props){
		super(props);

		this.state={total:0};

		this.addTotal = this.addTotal.bind(this);
	}

	addTotal(price){
		this.setState({total: this.state.total +price});
	}

	render(){

		var self = this;

		var services = this.props.items.map((s)=>{
			
			return <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal} />;
		});
		return(
			<div>
                    <h1>Our services</h1>
                    
                    <div id="services">
                        {services}

                        <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>

                    </div>

                </div>
		);
	}
}

class Service extends React.Component{
	constructor(props){
		super(props);

		this.state = {active: false};
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(){
		var active = !this.state.active;

		this.setState({active : active});

		this.props.addTotal(active ? this.props.price : -this.props.price)
	}

	render(){

		return(
			<p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
                    {this.props.name} <b>${this.props.price.toFixed(2)}</b>
                </p>
		);
	}
}

var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

ReactDOM.render(
    <ServiceChooser items={ services } />,
    document.getElementById('container')
);