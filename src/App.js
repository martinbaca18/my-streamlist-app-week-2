import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import StreamList from './StreamList';
import Movies from './Movies';
import Cart from './Cart';
import About from './About';

const App = () => {
    return (
        <Router>
            <div className="App">
                <header>
                    <h1>StreamList App</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">StreamList</Link></li>
                            <li><Link to="/movies">Movies</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<StreamList />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
