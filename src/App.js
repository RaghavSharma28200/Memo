import React, { Component } from "react";
import Todo from "./Todo";
export default class App extends Component {
  state = {
    value: "",
    item: [],
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleClick = () => {
    if (this.state.value.trim() === "") {
      return;
    } else {
      console.log("button clicked");
      const items = [...this.state.item, this.state.value];
      this.setState({ item: items, value: "" });
    }
  };
  handleDelete = (id) => {
    let olditem = [...this.state.item];
    console.log(olditem);
    const items = olditem.filter((element, i) => {
      return i !== id;
    });
    this.setState({ item: items });
  };
  handleKeypress =(e)=>{
      if(e.key ==="Enter"){
          this.handleClick();
      }
  }
  render() {
    return (
      <div className ="container">
        <h1 className ="heading-todo">Todo List</h1><br /> <br />
        <input
        className ="inp-field"
          type="text"
          name="text"
          id="id2"
          value={this.state.value}
          placeholder ="Enter Your Task"
          onChange={this.handleChange}
          onKeyPress ={this.handleKeypress}
        />
        <button className ="add-btn" onClick={this.handleClick}>
         ADD
        </button> <br /> <br />
        <div className="ul-div">
        <ul className ="ul-parent">
          <Todo item={this.state.item} Delete={this.handleDelete} />
        </ul>
        </div>
      </div>
    );
  }
}
