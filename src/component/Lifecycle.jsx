import React, { Component } from 'react';
class Freepath extends Component {
    state = {num:[{id:1, value:2}]  } 
    // constructor(props){
    //     super(props)
    //     console.log("app-constructor")
    // }
    componentDidMount(){
        let img = this.state.num[0]
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr37IH21bYP-VgzRhA3zcL75fSRDS0bb2d1ApGwZpIOw&s"
        // console.log('prevProps', props)
       console.log(this.state.num[0], img)
    }
    componentDidUpdate(){
        console.log("app-updated")
    }
    render() { 
        console.log(this.state.num[0])
        return (<>
                <h3>Hello world</h3>
                <img src={this.state.num[0].src} alt="" />
        </>);
    }
}
 
export default Freepath;