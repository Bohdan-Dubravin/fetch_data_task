import './App.css'
import HomePage from './layouts/HomePage'
import { Routes, Route } from 'react-router-dom'
import PostsPage from './layouts/PostsPage'
import ModalComponent from './components/ModalComponent'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='modal' element={<ModalComponent />} />
        </Route>

        <Route path='/posts/:id' element={<PostsPage />} />
      </Routes>
    </div>
  )
}

export default App
