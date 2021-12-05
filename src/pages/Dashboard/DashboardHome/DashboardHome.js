import { Group, LocalLibrary, MenuBook } from '@mui/icons-material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useBooks from '../../../hooks/useBooks';
import useGetRequest from '../../../hooks/useGetRequest';

const DashboardHome = () => {
    const { items: users } = useGetRequest('users');
    const { items: requestedBooks } = useGetRequest('requestedBooks');
    const { count } = useBooks();

    const { admin, user } = useAuth();

    return (
        <div >
            {admin ? <div className="flex items-center">
                <div className="max-w-7xl w-full mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                        <div className="w-full lg:w-1/3">
                            <div className="widget w-full p-4 rounded-lg bg-red-400 border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="text-xs uppercase font-light text-white">
                                            Total Readers
                                        </div>
                                        <div className="text-xl font-bold text-white">
                                            {users.length}
                                        </div>
                                    </div>
                                    <Group sx={{ color: 'white' }} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <div className="widget w-full p-4 rounded-lg bg-red-400 border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="text-xs uppercase font-light text-white">
                                            Total Request
                                        </div>
                                        <div className="text-xl font-bold text-white">
                                            {requestedBooks.length}
                                        </div>
                                    </div>
                                    <LocalLibrary sx={{ color: 'white' }} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <div className="widget w-full p-4 rounded-lg bg-red-400 border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="text-xs uppercase font-light text-white">
                                            Total Books
                                        </div>
                                        <div className="text-xl font-bold text-white">
                                            {count}
                                        </div>
                                    </div>
                                    <MenuBook sx={{ color: 'white' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div>
                <h2 className="text-6xl" >Hi <span className=" text-red-400">{user?.displayName}</span>, Welcome to Dashboard!</h2>
                <p className="text-2xl mt-5">We are happy that you are one of our happy readers. We have total <span className=" text-red-400">{count}</span> different books.</p>
                <p className="text-2xl mt-5">HAPPY READING!</p>
            </div>}
        </div>

    );
};

export default DashboardHome;