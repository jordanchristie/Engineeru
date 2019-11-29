import React from "react";
import Routes from "../Router";

class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <Routes />
      </div>
    );
  }

  // render() {
  //   const { records, searchInput } = this.state;
  //   return (
  //     <div className="App">
  //
  //       <SkillSearch
  //         onInputChange={this.handleInputChange}
  //         field={searchInput}
  //       />
  //
  //     </div>
  //   );
  // }
}

export default App;
