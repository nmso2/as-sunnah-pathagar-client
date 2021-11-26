import React from 'react';
import useBooks from '../../../hooks/useBooks';

const MyBook = (props) => {
    const { _id, bookId, status } = props.request;
    const { handleCancelRequest } = props;
    const { books } = useBooks();

    return (
        <div>
            {books.filter(book => bookId === book._id).map(request => <div className="lg:flex items-baseline justify-end">
                <p className="lg:text-3xl lg:px-5">{request.name}</p>
                <p className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">{status}</p>

                <button className="border border-red-500 text-red-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => handleCancelRequest(_id)}>Calcel Request</button>
            </div>)}
            <hr />
        </div>

    );
};

export default MyBook;