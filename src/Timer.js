import React,{Component} from 'react';

// function Timer(){
//     return <b className="fgblack">12345</b>
// }
class Timer extends Component{
    constructor(){
        super();
        this.state = {
            seconds:0
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.tick();
        }, 1000);
    }
    tick(){
        this.setState({
            seconds: this.state.seconds + 1
        })
    }

    render(){
        return <b className="fgblack">{this.state.seconds}</b>
    }
}
export default Timer;