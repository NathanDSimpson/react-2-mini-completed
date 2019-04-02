import React, { Component } from 'react';

export default class EditToggle extends Component {
  render() {
    return (
      <select 
      className="dropDownContainer ml0" 
      onChange={(event) => this.props.update(event.target.value)}>
        <option value="true"> Allow Edit </option>
        <option value="false"> Disable Edit </option>
      </select>
    );
  }
}

// export default function EditToggle(props){
//   return (
//     <select className="dropDownContainer ml0" onChange={ (e) => props.update(e.target.value) }>
//       <option value="true"> Allow Edit </option>
//       <option value="false"> Disable Edit </option>
//     </select>
//   )
// }