import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SkillSearch from "../components/SkillSearch";

class SkillsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      records: []
    };
  }
  componentDidMount() {
    fetch(
      "https://api.airtable.com/v0/appEV6FndnWfTqz0E/Table%201?api_key=keyxV8TiVBBweSkZ5"
    )
      .then(res => res.json())

      .then(data => this.setState({ ...this.state, records: data.records }));
  }

  handleInputChange = e => {
    this.setState({ searchInput: e.target.value });
  };

  // Dynamically routing input to correct page
  handleSubmit = e => {
    e.preventDefault();

    this.props.history.push(`/skills/${this.state.searchInput}`);
  };

  render() {
    const { records, searchInput } = this.state;
    return (
      <main>
        <h1 className="page-title">Skills</h1>
        <SkillSearch
          onInputChange={this.handleInputChange}
          field={searchInput}
          handleSubmit={this.handleSubmit}
        />
        <ul>
          {records.map((tag, i) => {
            return <li key={i}>{tag.fields.title}</li>;
          })}
        </ul>
      </main>
    );
  }
}

export default withRouter(SkillsPage);
