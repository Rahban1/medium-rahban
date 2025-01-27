
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import { Publish } from './pages/Publish';
import { Home } from './pages/Home';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/blog/:id' element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          } />
          <Route path='/blogs' element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          } />
          <Route path='/publish' element={
            <ProtectedRoute>
              <Publish />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
