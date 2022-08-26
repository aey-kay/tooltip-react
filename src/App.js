import React from 'react';
import Dropdown from './Dropdown';
import Tooltip from './ToolTip';

//  App as Class Component
class App extends React.Component {
  constructor() {
    super();
    // state to get direction and hover results
    this.state = {
      hover: false,
      direction: 'top',
    };

    // refrence to dropdown
    this.dropdown = React.createRef();
  }

  // function to change direction state according to dropdown value
  handleSelectDirection = () => {
    console.log('direction changed');
    this.setState({
      direction: this.dropdown.current.value
    })
  }

  // functions to change hover state 
  handleMouseIn = () => {
    console.log('hovered in');
    this.setState({ hover: true });
  };

  handleMouseOut = () => {
    console.log('hovered out');
    this.setState({ hover: false });
  };

  render() {
    const { direction, hover } = this.state;
    return (
      <div className="App">
        <h1 id="heading"> The ToolTip</h1>
        <Dropdown
          dropdown={this.dropdown}
          onSelectDirection={this.handleSelectDirection}
        />
        <Tooltip
          direction={direction}
          hover={hover}
          onMouseIn={this.handleMouseIn}
          onMouseOut={this.handleMouseOut}
        />
      </div>
    );
  }
}

export default App;
