import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            //Instead of passing value, id and selected, could simply pass
            // counter object itself as it contains everything we need to know
            // about and if we needed to add a new property, counter carries
            // all the data we need
            counter={counter}
            //value={counter.value}
            //id={counter.id}
            //selected={counter.selected}
          />
          /* Passing children prop<h4>Counter #{counter.id}</h4> */
        ))}
      </div>
    );
  }
}

export default Counters;
