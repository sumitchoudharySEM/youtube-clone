import { Header, Main, Sidebar, Watch } from "./components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="home">
        <Header />
        <div className="app">
        <Sidebar />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/Watch" element={<Watch />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
