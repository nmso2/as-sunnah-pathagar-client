import React from 'react';
import useBooks from '../../../hooks/useBooks';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner/Banner';
import NewBooks from '../NewBooks/NewBooks';

const Home = () => {
    const { books, isLoading } = useBooks();
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <p className="text-5xl mt-10">New Arrival</p>
            {
                isLoading ?
                    // <div className="fixed   h-screen w-screen  ">
                    <div className="animate-spin top-0 left-0 right-0 ml-auto mr-auto z-50 rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div> : <div className="container items-end my-10 p-5 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {
                            books.slice(0, 4).map(book => <NewBooks key={book._id} book={book}></NewBooks>)
                        }
                    </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;