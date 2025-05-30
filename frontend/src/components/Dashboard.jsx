import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))

    if (!localStorage.getItem('token')) {
        navigate('/login')
        return null
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Welcome to Dashboard</h1>
                <p>Hello, {user?.username || 'User'}!</p>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h2>Your Account</h2>
                    <p>Email: {user?.email}</p>
                    <p>Username: {user?.username}</p>
                </div>
                <div className="dashboard-card">
                    <h2>Quick Actions</h2>
                    <button onClick={() => navigate('/profile')}>View Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard 