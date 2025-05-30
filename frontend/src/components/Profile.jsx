import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Profile = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchUserProfile = async () => {
            const token = localStorage.getItem('token')
            try {
                const response = await axios.get('http://localhost:5000/api/auth/me', {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setUser(response.data)
            } catch (err) {
                setError('Failed to fetch profile data')
                if (err.response?.status === 401) {
                    localStorage.removeItem('token')
                    window.location.href = '/login'
                }
            } finally {
                setLoading(false)
            }
        }

        fetchUserProfile()
    }, [])

    if (loading) {
        return <div className="dashboard-container">Loading profile...</div>
    }

    if (error) {
        return <div className="dashboard-container message error">{error}</div>
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>User Profile</h1>
            </div>
            <div className="dashboard-content">
                <div className="profile-info">
                    <h2>Personal Information</h2>
                    <p><strong>Username:</strong> {user?.username}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                    <p><strong>Account Created:</strong> {new Date(user?.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile 