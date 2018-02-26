import React, { Component } from 'react';

class SelectRoom extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.rooms[0].id };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(`Selected room id: ${event.target.value}`)
    this.setState({value: event.target.value});
  }

  render() {
    const { rooms } = this.props

    return (
      <form className="navbar-form navbar-right">
        <div className="form-group">
          <label className="user-description">Room: </label>
          <select className="form-control user-select" value={this.state.value} onChange={this.handleChange}>
            {rooms.map((room, i) =>(<option key={i} value={room.id}>{room.name}</option>))}
          </select>
        </div>
      </form>
    );
  }
}

export default SelectRoom;