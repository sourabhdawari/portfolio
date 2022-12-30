import './App.css';
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap"
import Main from "./components/Main";
import "./css/magnific-popup.css"
import Footer from "./components/Footer";


// import 'react-photo-view/dist/react-photo-view.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
