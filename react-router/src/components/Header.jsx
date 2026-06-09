// import './App.css'
// import logo from '.logo.svg';
// import Header from './components/Header';
// import Home from './components/Home';
// import Footer from './components/Footer';

import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <h2>Header.jsx Area</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/comp1">Comp1</Link></li>
                <li><Link to="/comp2">Comp2</Link></li>
                <li><Link to="/comp3">Comp3</Link></li>
            </ul>
        </div>
    )
}

export default Header;