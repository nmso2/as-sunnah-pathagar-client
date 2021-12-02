import React from 'react';
import Header from '../../Shared/Header/Header';
import useBooks from '../../../hooks/useBooks';
import Book from '../Book/Book';
import Footer from '../../Shared/Footer/Footer';
import { Pagination, Typography } from '@mui/material';
import BookLoading from '../../Shared/BookLoading/BookLoading';

const Books = () => {
    const arrays = [1, 2, 3, 4];
    const { books, isLoading } = useBooks();
    return (
        <div>
            <Header></Header>
            {/* <Typography>Page: {page}</Typography>
            <Pagination style={{ justifyContent: "center", display: 'flex' }} count={pageCount} page={page} onChange={handleChange} /> */}
            {
                isLoading ? <div className="container items-end my-10 p-5 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {
                        arrays.map(array => <BookLoading key={array} />)
                    }
                </div> : <div className="container items-end my-10 p-5 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {
                        books.map(book => <Book key={book._id} book={book}></Book>)
                    }
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Books;