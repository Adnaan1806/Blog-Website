import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import { UserContextProvider } from "./context/UserContext";
import EditPost from "./pages/EditPost";

const App = () => {
  return (
   
     <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/posts/post/:id" element={<PostDetails />} />
        <Route exact path="/write" element={<CreatePost />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/edit/:id" element={<EditPost />} />
      </Routes>
     </UserContextProvider>
        
    
  );
};

export default App;
