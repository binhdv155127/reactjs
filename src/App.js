import React, { Component } from 'react';
import './App.css';
import ColerPicker from './components/ColorPicker';
import Sizesetting from './components/Sizesetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : 'red',
            fontSize: 15
        }
        this.onSetColor = this.onSetColor.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onSettingdefault = this.onSettingdefault.bind(this);
    }
    onSetColor(params){
        console.log(params);
        this.setState ({
            color : params /// neu de the nay thi no khong nhan minh phai bind no trong constructor nhe
        });
    }
    onChangeSize (value){
       // console.log(value);
       if(this.state.fontSize + value >8 && this.state.fontSize + value <38){
           this.setState({
               fontSize: this.state.fontSize + value 
           });
       }
    }
    onSettingdefault(params){
        console.log(params);
        if (params ){
            this.setState({
                color : 'red',
                fontSize: 15
            });
        }
    }
    render(){
        return (
            <div className="container mt-50">
                <div className="row">
                    <ColerPicker color = {this.state.color} onReceiveColor= {this.onSetColor}/>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Sizesetting fontSize = {this.state.fontSize} onChangeSize={this.onChangeSize}/>
                        <Reset onSettingdefault={this.onSettingdefault}/>
                    </div>
                    <Result color = {this.state.color} fontSize = {this.state.fontSize}/>
                </div>
            </div>
        );
    }
}

export default App;