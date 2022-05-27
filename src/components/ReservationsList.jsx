// we're still going to use a class for this component
// because we need the state, but also because we're going to fetch some data:
// fetching data for feeding a component MUST BE DONE in a specific spot
// and that spot is available JUST on class components!

import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
// import ListGroup from 'react-bootstrap/ListGroup'
// this way would be the preferred one

// 1) we're going to create an empty state, for holding the reservations at a later point
// 2) create a binding, a connection between the STATE and the INTERFACE (the render() method)

class ReservationsList extends Component {
  state = {
    reservations: [],
    // what is going to be the INITIAL value of reservations?
    // reservations is ALWAYS going to be an array!
    // so let's initialize it as an EMPTY one!
  }

  render() {
    return (
      <div className="my-2 text-center">
        <h2>Booked tables!</h2>
        {/* the list will go here */}
        <ListGroup>
          {this.state.reservations.map((bookedTable, i) => (
            <ListGroup.Item key={i}>{bookedTable.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default ReservationsList
