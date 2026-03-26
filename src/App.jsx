import './App.css'
import Data from './component/data/Data'
import Footer from './component/footer/Footer'
import Hero from './component/hero/Hero'
import Nav from './component/nav/Nav'
import Trust from './component/trust/Trust'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Trust></Trust>
      <Data></Data>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
