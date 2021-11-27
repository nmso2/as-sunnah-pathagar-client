import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { useState } from 'react';
import useBooks from '../../../../hooks/useBooks';
import { ArrowDropDown } from '@mui/icons-material';

const ManageRequest = (props) => {
    const { handleCancelRequests } = props;
    const { books } = useBooks();
    const [request] = useState(props.request);

    const handleUpdateRequest = (presengtStatus) => {
        request.status = presengtStatus;
        const url = `https://as-sunnah-pathagar.herokuapp.com/requestedBook/${request._id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(props.request)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully!');
                    window.location.reload();
                }
            })
    }

    //-------------------------------------

    return (
        <div>
            {books.filter(book => request.bookId === book._id).map(requested => <div>
                <div className="lg:flex items-baseline justify-end">
                    <p className="lg:px-5">{requested.name}</p>

                    <button className="border border-blue-500 text-blue-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline lg:block" onClick={() => handleUpdateRequest('Out of Stock')}>Out of Stock</button>
                    <button className="border border-blue-500 text-blue-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline lg:block" onClick={() => handleUpdateRequest('Confirmed')}>Confirm</button>

                    <button className="border border-red-500 text-red-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline lg:block" onClick={() => handleCancelRequests(request._id)}>Calcel Request</button>
                </div>
                <Accordion allowZeroExpanded className="py-2">
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="cursor-pointer text-red-500">
                                Request Details<ArrowDropDown sx={{ fontSize: 35 }} />
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="flex flex-col items-stretch">
                                <p>Name: {request.name}</p>
                                <p>Phone: {request.phone}</p>
                                <p>Address: {request.address}</p>
                                <p>Request Status: {request.status}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>)}
            <hr />
        </div>
    );
};

export default ManageRequest;