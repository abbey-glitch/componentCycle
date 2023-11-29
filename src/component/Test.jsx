import React, { Component } from 'react';
class Cyclo extends Component {
    constructor(props){
        super(props)
        this.state ={hello:"cyclobold"}
        this.changeState = this.changeState.bind(this)
    } 
    // changeState=()=>{
    //     this.setState({hello:"All!!- Its a great reactjs tutorial."});
    // }
    changeState(){
        this.setState({hello:"All!!- Its a great reactjs tutorial."});
    }
    componentDidMount(){
        console.log('component has mounted')
    }
    
    shouldComponentUpdate(prevProps, newState){
        // console.log(prevProps, newState)
        return true;
    }
    componentDidUpdate(prevProps, prevState){
        console.log('Component Did UPDATE!')
        console.log(prevProps, prevState)
    }
    componentWillUnmount(){
        // this.setState({hello:"new changes"});
        console.log('Component Will UNMOUNT!')
    }
    render() { 
        return (
            <div>
                <h1>ReactJS component's Lifecycle</h1>
                <h3>Hello {this.state.hello}</h3>
                <button onClick = {this.changeState}>Click Here!</button>
            </div>
        );
    }
}
 
export default Cyclo;