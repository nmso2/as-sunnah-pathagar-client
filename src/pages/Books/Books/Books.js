import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Book from '../Book/Book';
import Footer from '../../Shared/Footer/Footer';
import { Pagination } from '@mui/material';
import BookLoading from '../../Shared/BookLoading/BookLoading';

const Books = () => {
    const arrays = [1, 2, 3, 4];
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const size = 12;

    useEffect(() => {
        fetch(`https://as-sunnah-pathagar.herokuapp.com/books?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setBooks(data.books);
                const count = data.count;
                setIsLoading(false);
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div>
            <Header></Header>
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
            <Pagination style={{ justifyContent: "center", display: 'flex', marginBottom: "25px" }} count={pageCount} page={page} size="large" variant="outlined" shape="rounded" onChange={handleChange} />
            <Footer></Footer>
        </div>
    );
};

export default Books;