import React, { useState } from "react";
import Snowflakes from "./RectElement";

class CustomComponent extends React.Component {

  state = {
    data: []
  }

  componentDidMount(){
    this.add();
  }

  add = () => {
    const {data} = this.state;
    const newData = [...data];
    newData.push({key: Date.now(), x: Math.random(), y: Math.random()*50, r: Math.random()});
    // render();
    this.setState({data: newData});
    setTimeout(newData.length < 10 ? this.add : this.remove, 5);
  }

  remove = () => {
    const {data} = this.state;
    let newData = [...data];

    newData = newData.slice(1);
    this.setState({data: newData});
    setTimeout(newData.length > 0 ? this.remove : this.add, 5);
  }

  render(){
    
    return (
      <div style={{ textAlign: "center" }}>
        <Snowflakes items={this.state.data}/>
      </div>
    );
  }
}

export default CustomComponent;


