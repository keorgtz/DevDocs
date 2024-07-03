// src/components/UserForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export function UserForm() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`/api/users/${id}`)
                .then(response => setName(response.data.name))
                .catch(error => console.error('Error fetching user:', error));
        }
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = { name };

        if (id) {
            axios.put(`/api/users/${id}`, user)
                .then(() => navigate('/users'))
                .catch(error => console.error('Error updating user:', error));
        } else {
            axios.post('/api/users', user)
                .then(() => navigate('/users'))
                .catch(error => console.error('Error creating user:', error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{id ? 'Edit User' : 'Create User'}</h1>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <button type="submit">{id ? 'Update' : 'Create'}</button>
        </form>
    );
}
