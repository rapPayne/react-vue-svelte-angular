import { CSSProperties } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { About, Contact, NotFound } from './components/OtherComponents';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav style={styles.headerNav}>
            <Link to="/" style={styles.navLink}>Home</Link>
            <Link to="/about" style={styles.navLink}>About Us</Link>
            <Link to="/contact" style={styles.navLink}>Contact Us</Link>
          </nav>
        </header>
        <main style={styles.mainWrapper}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const styles: { [Name: string]: CSSProperties } = {
  mainWrapper: {
    paddingTop: "50px",
  },
  headerNav: {
    backgroundColor: "darkblue",
    padding: "10px",
    textAlign: "left",
    position: 'fixed',
    top: 0, left: 0, right: 0,
  },
  navLink: {
    color: "white",
    fontSize: "1.5em",
    padding: "0px 50px 0px 0px",
    textDecoration: "none",
  },
}
export default App;
