// import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Nomatch from './components/nomatch/nomatch';
import Update from './components/manageuser/update';
import Header from './components/header/header';
import RegistrationForm from './components/postuser/submit_data';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //      <Button> Learn React </Button>
        
    //   </header>

    // </div>,
    <>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Dashboard></Dashboard>}></Route>
      <Route path='/*' element={<Nomatch></Nomatch>}></Route>
      <Route path='/up' element={<Update></Update>}></Route>
      <Route path='/ux' element={<RegistrationForm></RegistrationForm>}></Route>
      
    </Routes>
    </>
  );
}

export default App;
