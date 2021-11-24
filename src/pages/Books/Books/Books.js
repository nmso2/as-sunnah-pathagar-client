import { Box } from '@mui/system';
import React from 'react';
import Header from '../../Shared/Header/Header';
import useBooks from '../../../hooks/useBooks';
import Book from '../Book/Book';

const Books = () => {
    const [books] = useBooks();
    console.log(books);
    return (
        <div>
            <Header></Header>
            <Box
                sx={{

                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 300,

                    },
                    alignItems: 'stretch'
                }}
            >
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }

            </Box>
        </div>
    );
};

export default Books;