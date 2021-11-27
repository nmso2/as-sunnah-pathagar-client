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
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">ইসলামের সঠিক জ্ঞান অর্জনে মুসলিমদের সাহায্য করতেই আমাদের কার্যক্রম।</p>
                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Books
                        </div>

                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            দুআ ও যিকির
                        </p>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            ইসলামী জ্ঞান চর্চা
                        </p>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            আত্মশুদ্ধি ও অনুপ্রেরণা
                        </p>
                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Contact Us
                        </div>

                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Mobile: +8801623-371391</p>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Email: assunnahpathagar@gmail.com</p>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Address: Bheramara, Kushtia</p>

                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Community
                        </div>

                        <a href="https://www.facebook.com/%E0%A6%86%E0%A6%B8-%E0%A6%B8%E0%A7%81%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%BE%E0%A6%B9-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0-107120294460789" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Facebook
                        </a>
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
                            © Copyright 2019-2021. All Rights Reserved by <a className="uppercase" href="https://www.facebook.com/%E0%A6%86%E0%A6%B8-%E0%A6%B8%E0%A7%81%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%BE%E0%A6%B9-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0-107120294460789">As-Sunnah Pathagar</a><br />
                            Design and Developed by <a className="uppercase" href="https://github.com/nmso2">Md. Nagib Mahfuz Subho</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;