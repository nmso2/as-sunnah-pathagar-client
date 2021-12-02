import React from 'react';
import useGetRequest from '../../../hooks/useGetRequest';
import BookLoading from '../../Shared/BookLoading/BookLoading';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Review from '../../Shared/Review/Review';
import ReviewLoading from '../../Shared/ReviewLoading/ReviewLoading';
import Banner from '../Banner/Banner/Banner';
import NewBooks from '../NewBooks/NewBooks';

const Home = () => {
    const { items: books, isLoading } = useGetRequest('books');
    const { items: reviews, isLoading: reviewIsLoading } = useGetRequest('reviews');
    const arrays = [1, 2, 3, 4];
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <p className="text-5xl mt-10">New Arrival</p>
            {
                isLoading ?
                    // <div className="fixed   h-screen w-screen  ">

                    <div className="container items-end my-10 p-5 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {
                            arrays.map(array => <BookLoading key={array} />)
                        }
                    </div> : <div className="container items-end my-10 p-5 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {
                            books.slice(0, 4).map(book => <NewBooks key={book._id} book={book}></NewBooks>)
                        }
                    </div>
            }

            <h1 className="py-8 text-5xl">Top Reviews</h1>
            {
                reviewIsLoading ?
                    // <div className="fixed   h-screen w-screen  ">
                    <div className="container items-end my-10 p-5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {
                            arrays.slice(0, 3).map(array => <ReviewLoading key={array} />)
                        }
                    </div> :
                    <div className="container mb-12 mx-auto px-4 md:px-12">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {
                                reviews.slice(0, 3).map(review => <Review key={review._id} review={review}></Review>)
                            }
                        </div>
                    </div>
            }

            <Footer></Footer>
        </div>
    );
};

export default Home;