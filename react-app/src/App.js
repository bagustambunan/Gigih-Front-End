// import logo from './logo.svg';
// import './App.css';

// import Search from "./page/home/Search";
import Exercise from "./page/home/Exercise";

function App() {

  console.log(process.env.REACT_APP_GIPHY_KEY);

  return (
    // <Search />
    <Exercise />
  );
}

export default App;
