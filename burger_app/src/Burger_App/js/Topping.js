import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
class Topping extends Component {
  createArr = (topping) => {
    let arr = [];
    for (let i = 0; i < topping; i++) {
      arr.push(i);
    }
    return arr;
  };
  renderTopping() {
    let { burgerState } = this.props;
    return burgerState.map((topping, index) => {
      let arr = this.createArr(topping.amount);
      return arr.map((item, count) => {
        return <div className={item + " st " + topping.name} key={count}></div>;
      });
    });
  }
  render() {
    return <Fragment>{this.renderTopping()}</Fragment>;
  }
}
const mapStateToProps = (state) => {
  return {
    burgerState: state.burgerReducer.topping,
  };
};
export default connect(mapStateToProps)(Topping);
