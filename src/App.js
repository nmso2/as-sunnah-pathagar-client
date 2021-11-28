import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddBooks from './pages/Dashboard/AddBooks/AddBooks';
import Books from './pages/Books/Books/Books';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login/Login';
import Registration from './pages/Login/Registration/Registration';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import MyBooks from './pages/Dashboard/MyBooks/MyBooks';
import NotFound from './pages/NotFound/NotFound';
import ManageRequests from './pages/Dashboard/ManageRequests/ManageRequests/ManageRequests';
import UserProfile from './pages/UserProfile/UserProfile';
import Review from './pages/Dashboard/Review/Review';
AOS.init();

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route exact path='/dashboard' element={<PrivateRoute><DashboardHome /></PrivateRoute>}>
              </Route>
              <Route path='/dashboard/makeAdmin' element={<AdminRoute><MakeAdmin /></AdminRoute>}>
              </Route>
              <Route path='/dashboard/addBooks' element={<AdminRoute><AddBooks /></AdminRoute>}>
              </Route>
              <Route path='/dashboard/myBooks' element={<PrivateRoute><MyBooks /></PrivateRoute>}>
              </Route>
              <Route path='/dashboard/review' element={<PrivateRoute><Review /></PrivateRoute>}>
              </Route>
              <Route path='/dashboard/manageRequests' element={<AdminRoute><ManageRequests /></AdminRoute>}>
              </Route>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/registration" element={<Registration />}>
            </Route>
            <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>}>
            </Route>
            <Route path="/myBooks" element={<PrivateRoute><MyBooks /></PrivateRoute>}>
            </Route>
            <Route path="*" element={<NotFound />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
