import './App.css';
import { Link, Route , Routes } from 'react-router-dom';

function App(){

  return(
    <div className="parent">

      <div className="navigation">

        <ul>
          <li><Link to = "/"> HomePage</Link></li>
          <li> <Link to = "/players"> Player List </Link>    </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element = {<h1>Home Page Baby</h1>}></Route>
        <Route path="/players" element = {<h1>This is the list of Grade a Players</h1>}></Route>
      </Routes>
    </div>
  );
}



export default App;
