import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    const isAuthenticated = localStorage.getItem('token')

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-brand">
                    <Link to={isAuthenticated ? "/dashboard" : "/"}>Auth System</Link>
                </div>
                <div className="nav-links">
                    <Link to="/dashboard">Dashboard</Link>
                    {isAuthenticated ? (
                        <>
                            <Link to="/profile">Profile</Link>
                            <button onClick={handleLogout} className="logout-btn">Logout</button>
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar 