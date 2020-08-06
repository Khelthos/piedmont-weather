import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import ListWeather from "./components/ListWeather";
import "./App.css";
import { requestWeather } from "./actions";

const mapStateToProps = (state) => {
  return {
    weathers: state.requestWeather.weathers,
    isPending: state.requestWeather.isPending,
    error: state.requestWeather.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onrequestMeteo: () => dispatch(requestWeather()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onrequestMeteo();
  }

  render() {
    const { weathers, isPending } = this.props;
    return isPending ? (
      <span className="ouro ouro3">
        <span className="left">
          <span className="anim"></span>
        </span>
        <span className="right">
          <span className="anim"></span>
        </span>
      </span>
    ) : (
      <div>
        <div className="tc">
          <h1 className="f2">Piedmont Weather App</h1>
        </div>
        <Container className="pl-5 pr-5">
          <Row>
            <ListWeather weathers={weathers} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
