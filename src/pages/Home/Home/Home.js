import React from 'react';
import useBooks from '../../../hooks/useBooks';
import useGetRequest from '../../../hooks/useGetRequest';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Review from '../../Shared/Review/Review';
import Banner from '../Banner/Banner/Banner';
import NewBooks from '../NewBooks/NewBooks';

const Home = () => {
    const { items: books, isLoading } = useGetRequest('books');
    const { items: reviews, isLoading: reviewIsLoading } = useGetRequest('reviews');
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
            <div className="container mb-12 mx-auto px-4 md:px-12">
                <h1 className="py-8 text-5xl">Reviews</h1>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;