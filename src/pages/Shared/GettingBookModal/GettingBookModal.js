import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const GettingBookModal = ({ openGettingBookModal, handleGettingBookClose, book }) => {

    const { user } = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();

    const handleBookingSubmit = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const bookName = book.name;
        const bookId = book._id;
        const status = 'Pending'

        const requestedBook = { name, email, phone, bookName, address, bookId, status };

        fetch('https://as-sunnah-pathagar.herokuapp.com/requestedBooks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestedBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Book Request Confirmed!');
                }
            })
        handleGettingBookClose();
        e.preventDefault();
    }
    return (
        <Modal
            open={openGettingBookModal}
            onClose={handleGettingBookClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className="text-center">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {book.name}
                </Typography>
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        size="small"
                        defaultValue={user?.displayName}
                        placeholder='Name'
                        required
                        inputRef={nameRef}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        size="small"
                        defaultValue={user.email}
                        placeholder='Email'
                        required
                        inputRef={emailRef}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        size="small"
                        placeholder='Phone Number'
                        type='tel'
                        required
                        inputRef={phoneRef}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        size="small"
                        placeholder='Address'
                        type='address'
                        required
                        inputRef={addressRef}
                    />


                    <Button variant="contained" style={{ backgroundColor: '#6797c7', marginBottom: 25 }} type="submit">Send Request</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default GettingBookModal;