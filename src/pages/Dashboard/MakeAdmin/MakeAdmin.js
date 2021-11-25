import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState();
    const [success, setSuccess] = useState(false);

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }



    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <h2 className='text-5xl mb-12'>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField label="Email"
                    variant="standard"
                    required
                    type="email"
                    onBlur={handleOnBlur}
                />
                <Button type="submit" variant="contained" style={{ backgroundColor: '#b0c2d4', marginBottom: 25, color: 'black' }}>Make Admin</Button>
            </form>
            {success && <Alert severity="success" className="w-1/2 mx-auto">Admid added Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;