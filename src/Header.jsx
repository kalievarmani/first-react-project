import logo from './logo.svg';
import './App.css';

function Header() {
  function clicked(){
    console.log('Click')
    alert('Warning')
  }
  return (
    <div className="App">
      <header className="App-header">
        Header text Hello world
        <p onClick={
          clicked
        }>
          Lorem ipsum dolor sit amet.
        </p>
      </header>
    </div>
  );
}

export default Header;