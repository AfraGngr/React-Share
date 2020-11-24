import logo from './logo.svg';
import './App.css';
import SignUp from "./pages/SignUp"
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SignUp/>
    </div>
  );
}

export default App;
