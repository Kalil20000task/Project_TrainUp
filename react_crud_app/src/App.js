// import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Nomatch from './components/nomatch/nomatch';
import Update from './components/manageuser/update';
import Header from './components/header/header';
import RegistrationForm from './components/postuser/submit_data';
import AboutUs from './components/aboutus/aboutus';
import Table from './components/table/table';
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
      <Route path='/update' element={<Update></Update>}></Route>
      <Route path='/about_us' element={<AboutUs></AboutUs>}></Route>
      <Route path='/register_user' element={<RegistrationForm></RegistrationForm>}></Route>
      <Route path='/table' element={<Table></Table>}></Route>
      
      
    </Routes>
    </>
  );
}

export default App;
