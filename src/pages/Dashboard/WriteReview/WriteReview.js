import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
const WriteReview = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useAuth();

    const onSubmit = data => {
        fetch('https://as-sunnah-pathagar.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review Added Successfully!');
                    reset();
                }
            })
    }
    return (
        <div className="leading-loose">
            <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <p className="text-gray-800 font-medium">Add Review</p>

                <div className="mt-2">
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="name" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Your Name" />
                </div>
                <div className="mt-2">
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" {...register("book", { required: true })} placeholder="Book Name" />
                </div>
                <div className="mt-2">
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" {...register("author", { required: true })} placeholder="Author" />
                </div>
                <div className="mt-2">
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" {...register("publisher", { required: true })} placeholder="Publisher" />
                </div>
                <div className="mt-2">
                    <textarea className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" {...register("review", { required: true })} placeholder="Review" />
                </div>
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" step=".5" max="5" min="0" {...register("rating", { required: true })} placeholder="Rating" />
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="mt-4">
                    <Button variant="contained" style={{ backgroundColor: '#b0c2d4', color: 'black' }} type='submit'>Add Review</Button>
                </div>
            </form>
        </div>
    );
};

export default WriteReview;