import React from 'react';
import useAuth from '../../hooks/useAuth';
import useGetRequest from '../../hooks/useGetRequest';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const UserProfile = () => {
    const { user } = useAuth();
    const { items: singleUser } = useGetRequest(`user?email=${user.email}`);
    return (
        <div>
            <Header></Header>
            <div className="inline-block my-12 p-12 shadow-2xl">
                <img className=" mx-auto" src={user?.photoURL} alt="" />
                <p>Name: {singleUser[0]?.displayName}</p>
                <p>Email: {singleUser[0]?.email}</p>
                <p>Phone: {singleUser[0]?.phone}</p>
                <p>Address: {singleUser[0]?.address}</p>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default UserProfile;