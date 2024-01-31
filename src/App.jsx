import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Content from './Components/Content';

function App() {
  return (
    <div className='parent'>

      <Navbar/>
      <h1>Hello Jiii</h1>
      <p>Vansh Waldeo</p>
      <p>Internet Speed </p>
      <h2>Microsoft is hiring freshers.</h2>

      <Content/>

      <p>Github pe code upload krdiya hai , Vaise</p>

      <Footer/>
    </div>
  );
}

export default App;
