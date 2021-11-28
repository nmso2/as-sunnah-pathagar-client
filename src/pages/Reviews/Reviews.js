import React from 'react';
import useGetRequest from '../../hooks/useGetRequest';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Review from '../Shared/Review/Review';

const Reviews = () => {
    const { items: reviews, isLoading: reviewIsLoading } = useGetRequest('reviews');
    return (
        <div>
            <Header></Header>
            {
                reviewIsLoading ?
                    // <div className="fixed   h-screen w-screen  ">
                    <div className="animate-spin top-0 left-0 right-0 ml-auto mr-auto z-50 rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div> : <div className="container mb-12 mx-auto px-4 md:px-12">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {
                                reviews.map(review => <Review key={review._id} review={review}></Review>)
                            }
                        </div>
                    </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Reviews;