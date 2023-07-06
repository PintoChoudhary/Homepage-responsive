import Navbar from './Navbar';
import './App.css';
import { Route , Routes} from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      <div class="position-absolute top-50 start-50 translate-middle">
        <h1 class="display-6">Welcome to our</h1>
        <h1 class="display-4">Home Page</h1>
      </div>
    </>
  );
}
const Features = () => {
  return (
    <>
      <Navbar />
      <div class="position-absolute top-50 start-50 translate-middle">
        <h1 class="display-6">Welcome to our</h1>
        <h1 class="display-4">Features Page</h1>
      </div>
    </>
  );
}
const About = () => {
  return (
    <>
      <Navbar />
      <div class="position-absolute top-50 start-50 translate-middle">
        <h1 class="display-6">Welcome to our</h1>
        <h1 class="display-4">About Page</h1>
      </div>
    </>
  );
}
const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div class="position-absolute top-50 start-50 translate-middle">
        <h1 class="display-6">Welcome to our</h1>
        <h1 class="display-4">Contact Us Page</h1>
      </div>
    </>
  );
}
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}>
        
      </Route>

      <Route exact path='/Feature' element={<Features/>}>
        
      </Route>

      <Route exact path='/About' element={<About/>}>
        
      </Route>

      <Route exact path='/Contact' element={<ContactUs/>}>
        
      </Route>
    </Routes>
  );
}

export default App;
