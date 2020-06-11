import React, { Component } from 'react';

class Sizesetting extends Component {
     changeSize(value){
        // console.log(value);
        this.props.onChangeSize(value);
     }
    
    render(){
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.fontSize}</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick = {()=>this.changeSize(2)}>Tang </button>
                    <button type="button" className="btn btn-success" onClick = {()=>this.changeSize(-2)}>Gian</button>
                </div>
            </div>
        );
    }
}

export default Sizesetting;