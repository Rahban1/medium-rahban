
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import { Publish } from './pages/Publish';
import { Home } from './pages/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/blog/:id' element={<Blog />}></Route>
          <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='/publish' element={<Publish/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
