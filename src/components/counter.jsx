import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor() {
  // super();
  //{
  /* "this" now is ALWAYS referencing the current counter object 1:06 */
  //}
  //this.handleIncrement = this.handleIncrement.bind(this);
  //}

  handleIncrement = (product) => {
    // console.log("Increment Clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // Children prop console.log(this.props);

    return (
      <div>
        {/* Pass children prop for complex thing such as
          a dialogue box, you'd use:
         {this.props.children}
     */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={(product) => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
