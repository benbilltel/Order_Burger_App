import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { incrOrReduce } from "../Redux/Actions/actionsBurger";
class Bill extends Component {
  renderAmount(index) {
    let { burgerState } = this.props;
    return (
      <Fragment>
        <button
          className="btn btn-success"
          style={{ width: "40px", height: "40px" }}
          onClick={() => {
            this.props.incrOrReduce(index, true);
          }}
        >
          +
        </button>
        <span className="mx-3">{burgerState[index].amount}</span>
        <button
          className="btn btn-danger"
          style={{ width: "40px", height: "40px" }}
          onClick={() => {
            this.props.incrOrReduce(index, false);
          }}
        >
          -
        </button>
      </Fragment>
    );
  }
  renderTopping() {
    let { burgerState } = this.props;
    return burgerState.map((topping, index) => {
      return (
        <tr className="table-success" key={index}>
          <th scope="row">{index + 1}</th>
          <td>{topping.name}</td>
          <td>{this.renderAmount(index)}</td>
          <td>{topping.price}$</td>
          <td>{topping.price * topping.amount}$</td>
        </tr>
      );
    });
  }
  calTotal = () => {
    return this.props.burgerState.reduce((total, topping, index) => {
      return (total += topping.price * topping.amount);
    }, 0);
  };
  render() {
    return (
      <div>
        <h1 className="title_right">Bill</h1>
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Topping</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTopping()}
            <tr className="table-secondary">
              <td colSpan={4} className="total">
                Total
              </td>
              <td className="total_money">{this.calTotal()}$</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burgerState: state.burgerReducer.topping,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrOrReduce: (index, act) => {
      dispatch(incrOrReduce(index, act));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Bill);
