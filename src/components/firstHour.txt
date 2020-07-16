import React, { Component } from "react";

class Counter extends Component {
  // A special property in React component and is an object that includes
  // any data that this component needs
  // A property called 'state' which is then set to an object state
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  /* One way to apply a style is to define a property here and
   then reference it a JSX expression style={this.styles}
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };
  */

  render() {
    return (
      <div>
        {/*<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm"> Increment</button>*/}
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  /*
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }
*/
  //Use {curly braces} to render something dynamically
  // Within curly braces, add in any valic JavaScript expression
  // An expression is something that produces a value

  /*<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
  <button className="btn btn-secondary btn-sm">Increment</button> */
  /*
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </div>
    );
  }
  */
  /*
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  
  formatCount() {
    //object destructuring (this.state.count), below, we structure the object
    // by picking the count property. Here, we pick the count property of this
    // object and are storing it in a seperate constant called count
    const { count } = this.state;
    //If it the count is zero, we want to return the string 'Zero',
    // otherwise we want to return the value of the count property itself
    return count === 0 ? "Zero" : count;

    //can also return a JSX expression
    // return count === 0 ? <h1>Zero</h1> : count;
  }
  */
}

export default Counter;
