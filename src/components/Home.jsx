// the Home component is going to have the carousel
// and the comments section!

import { Component } from 'react'
import { Carousel, Container, Row, Col, ListGroup } from 'react-bootstrap'
import arrayOfPastas from '../data/menu.json'
import ReservationForm from './ReservationForm'
import ReservationsList from './ReservationsList'

// let's create Home!
class Home extends Component {
  // the render() method is the ONLY MANDATORY part
  // in a class component

  // in a class component, you have some sort of a "memory" object you can use!
  // this "memory" object is called THE STATE
  // I can use the state object just in CLASS COMPONENTS

  // state is a reserved keyword
  state = {
    // I just need to remember the selected pasta
    selectedPasta: null,
  }
  // the state object is a read-only, encapsulated object in a Class Component!
  // the only way of changing the values of its properties is using this.setState()

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
            <ReservationsList />
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
            <ReservationForm />
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          {/* <Col className="col col-xs-12 col-md-6"> */}
          <Col xs={12} md={6}>
            {/* curly brackets are in place because the value of the prop is a number! */}
            <Carousel>
              {arrayOfPastas.map((pasta) => (
                <Carousel.Item key={pasta.id}>
                  <img
                    className="d-block w-100"
                    src={pasta.image}
                    alt="First slide"
                    onClick={() => {
                      console.log('you clicked an image!')
                      // I want every time I click to CHANGE the selectedPasta
                      // in the state!
                      // the state object is READ-ONLY!
                      // the only way for changing the state object is using
                      // a function called setState() found on "this"
                      this.setState({
                        selectedPasta: pasta, // new value! pasta is the object!
                      }) // setState CHANGES the state of the component!
                    }}
                  />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="mt-3 justify-content-center">
          <Col className="text-center" xs={12} md={6}>
            <ListGroup>
              {/* I want to generate as many ListGroup.Item as elements in the
              comments array living in the selectedPasta in the state */}
              {this.state.selectedPasta && // the short-circuit operator
                this.state.selectedPasta.comments.map((review, i) => (
                  <ListGroup.Item key={i}>{review.comment}</ListGroup.Item>
                ))}
            </ListGroup>
            {/* our page is crashing because initially this.state.selectedPasta
            is null, and we told our interface to map the comments of it! */}
            {/* you can fix it for example trying to read the comments property
            JUST if this.state.selectedPasta is not null... */}
            {/* DECLARATIVE APPROACH: we're telling the interface to ALWAYS
            map the comments out of the selected pasta */}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home

// After generating the carousel slides, I want to show the reviews of the pastas
// I have room to show reviews for 1 pasta at a time: I'll have to click on one
// in order to "select" it, and the reviews will be shown just for the "selected" pasta

// how can I select a pasta, and keep that as the selected one?
