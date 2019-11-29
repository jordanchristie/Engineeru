import React, { Component } from "react";
import MentorsList from "../components/MentorsList";

class MentorshipPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: []
    };
  }

  async componentDidMount() {
    fetch(` https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(mentors => this.setState({ mentors }));
  }
  render() {
    const { mentors } = this.state;
    return (
      <main>
        <h2 className="page-title"> Mentorship </h2>
        <MentorsList mentors={mentors} />
      </main>
    );
  }
}

export default MentorshipPage;
