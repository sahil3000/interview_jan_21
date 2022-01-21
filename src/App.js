import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import FetchUsers from './components/fakeApi/FetchUsers';
import FetchUsersWithScroll from './components/fakeApi/FetchUsersWithScroll';
import Parent from './components/sendDataParentChild_ChildParent/Parent';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import ToDos from './components/todoAppExample/ToDos';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <>
      <header><Header/></header>
      <main className='py-3'>
        <Container>
        <Routes>
          <Route path='/' element={<HomePage/>} />    
          <Route path='/parent_child' element={<Parent/>} />
          <Route path='/fake_api' element={<FetchUsers/>} />
          <Route path='/fake_api_scroll' element={<FetchUsersWithScroll/>} />
          <Route path='/todo' element={<ToDos/>} />
        </Routes>
      </Container>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
