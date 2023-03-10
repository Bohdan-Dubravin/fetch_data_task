import './App.css'
import HomePage from './layouts/HomePage'
import { Routes, Route } from 'react-router-dom'
import PostsPage from './layouts/PostsPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='posts' element={<PostsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
