import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Books from './pages/Books/Books';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddBooks from './pages/Dashboard/AddBooks/AddBooks';
AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route exact path='/dashboard' element={<DashboardHome />}>
            </Route>
            <Route path='/dashboard/makeAdmin' element={<MakeAdmin />}>
            </Route>
            <Route path='/dashboard/addbooks' element={<AddBooks />}>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
