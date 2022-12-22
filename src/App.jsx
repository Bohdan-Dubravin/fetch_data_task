import './App.css'
import HomePage from './layouts/HomePage'
import { Routes, Route } from 'react-router-dom'
import PostsPage from './layouts/PostsPage'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts/:id' element={<PostsPage />} />
      </Routes>
    </div>
  )
}

export default App
