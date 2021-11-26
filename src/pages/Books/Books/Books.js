import React from 'react';
import Header from '../../Shared/Header/Header';
import useBooks from '../../../hooks/useBooks';
import Book from '../Book/Book';

const Books = () => {
    const { books, isLoading } = useBooks();
    return (
        <div>
            <Header></Header>
            {
                isLoading ? <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div> : <div className="container items-end my-10 p-5 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {
                        books.map(book => <Book key={book._id} book={book}></Book>)
                    }
                </div>
            }

        </div>
    );
};

export default Books;