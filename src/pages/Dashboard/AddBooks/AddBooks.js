import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddBooks = () => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [translator, setTranslator] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('author', author);
        formData.append('translator', translator);
        formData.append('publisher', publisher);
        formData.append('image', image);

        fetch('http://localhost:5000/books', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Book added successfully');
                    e.target.value = '';
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h2 className="text-4xl">Add Book</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%', py: '5px' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', py: '5px' }}
                    label="Category"
                    type='text'
                    required
                    onChange={e => setCategory(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', py: '5px' }}
                    label="Author"
                    type='text'
                    required
                    onChange={e => setAuthor(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', py: '5px' }}
                    label="Translator"
                    type='text'
                    onChange={e => setTranslator(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%', py: '5px' }}
                    label="Publisher"
                    type='text'
                    required
                    onChange={e => setPublisher(e.target.value)}
                    variant="standard" />
                <br />
                <Input
                    sx={{ width: '50%', py: '15px' }}
                    type="file"
                    accept="image/*"
                    required
                    onChange={e => setImage(e.target.files[0])} />
                <br />

                <Button variant="contained" style={{ backgroundColor: '#5CE7ED', marginTop: 15 }} type='submit'>Add Book</Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default AddBooks;