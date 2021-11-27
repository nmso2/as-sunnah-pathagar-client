import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800">
                <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">


                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            About As-Sunnah Pathagar
                        </div>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">He wears them. She wears them. Everyone wears them. Shop the top selling brands worn around the world at our low outlet pricing.</p>
                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Products
                        </div>

                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Casual
                        </p>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Sunglass
                        </p>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Stylish Sunglass
                        </p>
                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Contact Us
                        </div>

                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Mobile: +8801700000000</p>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Email: info@sunglasscollection.com</p>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Address: Dhaka, Bangladesh</p>

                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Community
                        </div>

                        <Link to='/' className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Discord
                        </Link>
                        <Link to='/' className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Twitter
                        </Link>
                        <Link to='/' className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            YouTube
                        </Link>
                    </div>
                </div>

                <div className="pt-2">
                    <div className="pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
                        <div className="mt-2">
                            © Copyright 2019-2021. All Rights Reserved by <a className="uppercase" href="https://github.com/nmso2">Md. Nagib Mahfuz Subho.</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;