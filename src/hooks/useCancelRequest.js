import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useCancelRequest = () => {

    const { user } = useAuth();
    const [requests, setRequest] = useState([]);
    useEffect(() => {
        fetch(`https://as-sunnah-pathagar.herokuapp.com/requestedBook?email=${user.email}`)
            .then(res => res.json())
            .then(data => setRequest(data));
    }, [user.email]);
    // Delete a Plan
    const handleCancelRequest = id => {
        const proceed = window.confirm('Are you sure, you want to cancel?')
        if (proceed) {
            const url = `https://as-sunnah-pathagar.herokuapp.com/requestedBook/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Canceled Request!');
                        const remainingRequests = requests.filter(request => request._id !== id);
                        setRequest(remainingRequests);
                    }
                })
        }
    }
    return [requests, handleCancelRequest];
};

export default useCancelRequest;


