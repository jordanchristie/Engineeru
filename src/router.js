import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SkillsPage from "./pages/SkillsPage";
import SkillsResult from "./components/SkillsResult";
import HomePage from "./pages/HomePage";
import MentorshipPage from "./pages/Mentorship";
import JobsPage from "./pages/JobsPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/skills" component={SkillsPage} />
        <Route path="/skills/:skill" component={SkillsResult} />
        <Route exact path="/mentorship" component={MentorshipPage} />
        <Route path="/mentorship/mentors" component={""} />
        <Route exact path="/jobs" component={JobsPage} />
        <Route path="/jobs/:term" component={""} />
      </Switch>
    </Router>
  );
};

export default Routes;
