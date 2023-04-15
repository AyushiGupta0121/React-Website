
import './App.css';
import Header from './Components/header';
import Main from './Components/Main';
// import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      {<>
      <Header />
      <Main/>
      {/* <Contact/> */}
      </>}
    </div>
  );
}

export default App;
