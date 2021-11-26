import React from 'react';
import useCancelRequest from '../../../hooks/useCancelRequest';
import MyBook from '../MyBook/MyBook';

const MyBooks = () => {
    const [requests, handleCancelRequest] = useCancelRequest();
    return (
        <div className="bg-gray-100 pt-1 min-h-screen">
            <div className="shadow-2xl bg-white p-5 mt-10 mx-2 lg:inline-block">
                <h1 className="text-5xl px-2 lg:px-auto pb-5">Requested Books</h1>
                <hr />
                {requests.map(request => <MyBook key={request._id} handleCancelRequest={handleCancelRequest} request={request}></MyBook>)}
            </div>
        </div>
    );
};

export default MyBooks;