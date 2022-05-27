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
// 3) now we have to fill the state! we have to fetch the reservations list and use this.setState to put them into the state
// 4) let's NOT launch our fetchReservations() function from render()... because render() fires again at every state change!
// 5) we should find a method that is guaranteed to be executed JUST ONCE!

class ReservationsList extends Component {
  state = {
    reservations: [],
    // what is going to be the INITIAL value of reservations?
    // reservations is ALWAYS going to be an array!
    // so let's initialize it as an EMPTY one!
  }

  componentDidMount = () => {
    console.log("I'm COMPONENTDIDMOUNT!")
    // this method is another reserverd keyword
    // this method is guaranteed to be executed JUST ONCE every time the component mounts!
    this.fetchReservations()
    // componentDidMount is mostly used to perform data fetching!
  }

  fetchReservations = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation'
      )
      if (response.ok) {
        // server answered with 200! :)
        let data = await response.json() // this gets the body out of the response, in order to use it!
        console.log('RESERVATIONS LIST!: ', data)
        // we have to use setState in order to change the state object!
        this.setState({
          reservations: data,
        })
      } else {
        // server answered with an error code! :(
        console.log('error happened!')
      }
    } catch (error) {
      // falling here if we're not able to contact the server at all
      // (network issues?)
      console.log(error)
    }
  }

  render() {
    // let's try to launch it from render()!
    // WRONG IDEA.
    // this is what happened: render() fires EVERY TIME the state changes.
    // this.fetchReservations() // <-- INFINITE LOOP
    console.log("I'm RENDER!")
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
