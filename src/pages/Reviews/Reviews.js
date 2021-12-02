import React from 'react';
import useGetRequest from '../../hooks/useGetRequest';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Review from '../Shared/Review/Review';
import ReviewLoading from '../Shared/ReviewLoading/ReviewLoading';

const arrays = [1, 2, 3];

const Reviews = () => {
    const { items: reviews, isLoading: reviewIsLoading } = useGetRequest('reviews');
    return (
        <div>
            <Header></Header>
            {
                reviewIsLoading ?
                    // <div className="fixed   h-screen w-screen  ">
                    <div className="container items-end my-10 p-5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {
                            arrays.map(array => <ReviewLoading key={array} />)
                        }
                    </div> : <div className="container mb-12 mx-auto px-4 md:px-12">
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