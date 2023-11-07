import { Routes , Route, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import NewPage from './pages/News'
import ContactPage from './pages/Contact'

function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/News">News</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
    
    <Routes>
      <Route path='/' element ={<HomePage/>} />
      <Route path='/News' element ={<NewPage/>} />
      <Route path='/Contact' element ={<ContactPage/>} />
    </Routes>
    </div>
  );
}

export default App;

// dùng thẻ <a> sẽ reload lại cả trang (MPA) ==> nên dùng link 