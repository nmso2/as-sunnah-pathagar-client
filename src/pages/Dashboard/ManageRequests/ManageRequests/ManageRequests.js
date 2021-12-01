import React from 'react';
import useCancelRequests from '../../../../hooks/useCancelRequests';
import ManageRequest from '../ManageRequest/ManageRequest';

const ManageRequests = () => {
    const [requests, handleCancelRequests] = useCancelRequests();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="bg-gray-100 pb-10 min-h-screen">
            <div className="shadow-2xl bg-white p-5 mt-10 mx-2 lg:inline-block">
                <h1 className="text-5xl px-2 lg:px-auto pb-5">Manage Book Request</h1>
                <hr />
                {requests.map(request => <ManageRequest key={request._id} request={request} handleCancelRequests={handleCancelRequests} handleChange={handleChange} expanded={expanded}></ManageRequest>)}
            </div>
        </div>
    );
};

export default ManageRequests;