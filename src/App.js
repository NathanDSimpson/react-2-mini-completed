import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  state = {
    fontColor: 'black',
    fontSize: 12,
    fontFamily: 'Monospace',
    allowEdit: true
  }
  // updateColor
  updateColor = (newColor) => {
    this.setState({fontColor: newColor})
  }

  // updateSize
  updateSize = (newSize) => {
    this.setState({fontSize: newSize})
  }

  // updateFamily
  updateFamily = (newFamily) => {
    this.setState({fontFamily: newFamily})
  }

  // updateEditStatus
  updateEditStatus = (newStatus) => {
    this.setState({allowEdit: newStatus})
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus} />
          <ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit} fontColor={this.state.fontColor} />
          <SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit} fontSize={this.state.fontSize} />
          <FamilyChanger update={this.updateFamily} allowEdit={this.state.allowEdit} fontFamily={this.state.fontFamily} />
        </div>
        <div className="textArea" >
          <TextContainer 
          fontColor={this.state.fontColor}
          fontSize={this.state.fontSize}
          fontFamily={this.state.fontFamily}/>
        </div>
      </div>
    );
  }
}

export default App;
