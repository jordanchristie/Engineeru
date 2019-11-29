import React, { Component } from "react";

export default class JobSearch extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  indeedSearch() {
    fetch(
      `http://api.indeed.com/ads/apisearch?q=${this.props.query}&format=json`
    );
  }

  render() {
    return <div></div>;
  }
}
