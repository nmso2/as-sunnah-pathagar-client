import { Star, StarBorder } from '@mui/icons-material';
import React from 'react';
import Rating from 'react-rating';

const Review = (props) => {
    const { name, review, book, author, publisher, rating } = props.review;
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="overflow-y-scroll m-4 overflow-x-hidden h-80 rounded-lg shadow-md lg:min-h-full hover:shadow-2xl duration-500">
                <header className="leading-tight p-2 md:pt-4">
                    <h1 className="text-3xl">{book}</h1>
                    <div className="flex justify-evenly items-center">
                        <p className="text">Author: {author}</p>
                        <p className="text">Publisher: {publisher}</p>
                    </div>
                </header>
                <div className="flex justify-evenly items-center mb-2">
                    <p className="text">By: {name}</p>
                    <p><span className="text">Rating: </span> <Rating className="text-yellow-500"
                        initialRating={rating}
                        readonly

                        emptySymbol={<StarBorder sx={{ color: '#ffc107' }} />}
                        fullSymbol={<Star sx={{ color: '#ffc107' }} />}
                    /></p>
                </div>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="ml-2 text-lg">{review}</p>
                </footer>

            </div>
        </div>
    );
};

export default Review;