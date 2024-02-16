import Post from './components/navbar/Post'
import Home from "./components/navbar/Home";
import Navbar from "./components/navbar/Navbar";
import Inbox from "./components/Inbox"
import Test1 from "./components/Test1"
import Test2aa from "./components/Test2"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar title="Navbar" aboutNavText="About"></Navbar> */}
        <div className="container">
        <Navbar></Navbar>

        <Routes>
            <Route path="/" element={<Home />}>Home</Route>          
            <Route path="/post" element={<Post />}>Post</Route>
            <Route path="/inbox" element={<Inbox />}>Inbox</Route>
            <Route path="/test1" element={<Test1 />}>Test1</Route>
            <Route path="/test2aa" element={<Test2aa />}>Test2aa</Route>
          </Routes>
          
          
        </div>
      </Router>
    </>
  );
}

export default App;

