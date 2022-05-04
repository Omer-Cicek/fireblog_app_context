import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Main from '../pages/Main';
import About from '../pages/About';
import NewBlog from '../pages/NewBlog';
import Details from '../pages/Details';
import EditBlog from '../pages/EditBlog';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/newBlog" element={<NewBlog />} />
        <Route path="/editBlog" element={<EditBlog />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
