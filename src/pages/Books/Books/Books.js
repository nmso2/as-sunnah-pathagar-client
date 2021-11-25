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
            <div className="container items-end my-10 p-5 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;