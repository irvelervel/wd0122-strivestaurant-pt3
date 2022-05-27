import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

// name --> string
// phone --> string/number
// numberOfPeople --> string/number
// dateTime --> string
// smoking --> boolean
// specialRequests --> string

class ReservationForm extends Component {
  state = {
    // this state object is going to collect all our input values
    // AS WE'RE TYPING THEM!
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: 1,
      dateTime: '',
      smoking: false,
      specialRequests: '',
    },
  }

  handleChange = (propertyToSet, value) => {
    this.setState({
      reservation: {
        ...this.state.reservation,
        [propertyToSet]: value,
      },
      // the problem comes from the fact that object properties
      // cannot take directly their names out of function parameters :(
      // in order to use a variable/argument/constant as a property name in an
      // object, you need to EVALUATE that variable/argument/constant!
      // put it into []! that will take the value of your argument (not its name)
      // and use it as the property name
    })
  }

  handleSubmit = async (e) => {
    // e is the form submission event, your function gets it automatically!
    e.preventDefault()
    // preventDefault() will STOP the default behavior of your browser!
    // let's collect all the values from the form!
    // ...just kidding, we have already all the values in the state! :)
    // all the values are already safely stored in this.state.reservation

    // how to deal with Promises? 2 ways:
    // 1) chained .then method
    // fetch('https://striveschool-api.herokuapp.com/api/reservation', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state.reservation),
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     console.log('job done!')
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // 2) async/await
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation',
        {
          method: 'POST',
          body: JSON.stringify(this.state.reservation),
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      console.log('job done!')
      console.log(response)
      if (response.ok) {
        // this property tells us the outcome of the network call
        alert('reservation saved!')
        this.setState({
          reservation: {
            name: '',
            phone: '',
            numberOfPeople: 1,
            dateTime: '',
            smoking: false,
            specialRequests: '',
          },
        })
      } else {
        alert('something went wrong with the operation')
      }
    } catch (error) {
      console.log(error)
      // this means most likely your internet connection has a problem
      // ...because you never reached the server in the first place!
    }
  }

  render() {
    return (
      <div className="my-2 text-center">
        <h2>Book your table here!</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>What's your name?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert your name here"
              value={this.state.reservation.name}
              // now from here we also need to CHANGE the value of name in the state!
              onChange={(e) => {
                // console.log('ciao!')
                // this.setState({
                //   // setState merges the object you're passing to it
                //   // into the current state (it's a MERGING process)
                //   reservation: {
                //     // here I'm just assigning an object with ONE property!
                //     ...this.state.reservation,
                //     name: e.target.value, // this is carrying the character pressed!
                //   },
                // })
                this.handleChange('name', e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>What's your phone?</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Insert your phone here"
              value={this.state.reservation.phone}
              onChange={(e) => {
                // this.setState({
                //   reservation: {
                //     // I'd like to remember also the OTHER existing values!
                //     // I have to set the new reservation object starting from
                //     // what I already have! otherwise I'm losing all the other properties (name, numberOfPeople etc.)
                //     ...this.state.reservation,
                //     // the spread operator ... is taking into here
                //     // all the existing pairs of key/value from the object
                //     // I'm spreading
                //     phone: e.target.value,
                //   },
                // })
                this.handleChange('phone', e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>How many are you?</Form.Label>
            <Form.Control
              as="select"
              value={this.state.reservation.numberOfPeople}
              onChange={(e) => {
                // this.setState({
                //   reservation: {
                //     ...this.state.reservation,
                //     numberOfPeople: e.target.value,
                //   },
                // })
                this.handleChange('numberOfPeople', e.target.value)
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>When are you coming?</Form.Label>
            <Form.Control
              type="datetime-local"
              value={this.state.reservation.dateTime}
              onChange={(e) => {
                // this.setState({
                //   reservation: {
                //     ...this.state.reservation,
                //     dateTime: e.target.value,
                //   },
                // })
                this.handleChange('dateTime', e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Do you smoke?"
              // the "value" property in checkboxes is NOT true/false!
              // in order to take true/false as a value from a checkbox
              // we need to read another property: 'checked'
              checked={this.state.reservation.smoking}
              onChange={(e) => {
                this.handleChange('smoking', e.target.checked)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Any special request?</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.reservation.specialRequests}
              onChange={(e) => {
                this.handleChange('specialRequests', e.target.value)
              }}
            />
          </Form.Group>

          <Button variant="info" type="submit">
            Send it!
          </Button>
        </Form>
      </div>
    )
  }
}

export default ReservationForm
