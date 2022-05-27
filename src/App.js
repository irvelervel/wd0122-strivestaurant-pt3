import './App.css'
// importing the bootstrap css file is required!
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'

// the curly brackets are necessary for importing a component that has been
// exported NOT as default
// you DON'T need the curly brackets if you're importing something that HAS
// been exported as default!

const App = () => {
  return (
    <>
      <CustomNavbar title="Strivestaurant" />
      <Home />
    </>
  )
}

export default App
