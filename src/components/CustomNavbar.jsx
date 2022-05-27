import { Navbar, Nav } from 'react-bootstrap'

// in a functional component, you're going to receive ALL the props
// in an object received as the argument of the component function!

// const CustomNavbar = ({ title }) => {
//     return (
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">{title}</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="#contact">Contact</Nav.Link>
//             <Nav.Link href="#menu">Menu</Nav.Link>
//             <Nav.Link href="#info">Info</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     )
//   }

// if your functional component is just returning some JSX, you can
// omit the return statement and the curly brackets altogether!

const CustomNavbar = ({ title }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">{title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="#menu">Menu</Nav.Link>
        <Nav.Link href="#info">Info</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default CustomNavbar
