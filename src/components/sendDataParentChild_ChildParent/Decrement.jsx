import { Component } from "react";

class Decrement extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    incrementHandler(){
        this.props.incrementEvent();
    }
    render(){
        return(
            <>
            <button className="btn btn-dark" onClick={()=>this.props.decrementEvent()}>Decrement by 1</button>
            <h3>{this.props.count}</h3>
            <button className="btn btn-dark" onClick={this.incrementHandler.bind(this)}>Increment by 1</button>
            </>
        );
    }
}
export default Decrement;