// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';
import React, { useState } from 'react';
import useBooks from '../../../../hooks/useBooks';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ManageRequest = (props) => {
    const { handleCancelRequests, expanded, handleChange } = props;
    const { books } = useBooks();
    const [request] = useState(props.request);
    const [date, setDate] = React.useState(null);



    const handleUpdateRequest = (presengtStatus) => {
        request.status = presengtStatus;
        request.returnDate = date.toLocaleDateString();
        request.returnTime = date.toLocaleTimeString();
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
                <Accordion expanded={expanded === requested._id} onChange={handleChange(`${requested._id}`)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {requested.name}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>{request.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="lg:flex items-baseline justify-end">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="Return Date"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                />
                            </LocalizationProvider>
                            <button className="border border-blue-500 text-blue-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline lg:block" onClick={() => handleUpdateRequest('Out of Stock')}>Out of Stock</button>
                            <button className="border border-blue-500 text-blue-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline lg:block" onClick={() => handleUpdateRequest('Confirmed')}>Confirm</button>

                            <button className="border border-red-500 text-red-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline lg:block" onClick={() => handleCancelRequests(request._id)}>Calcel Request</button>
                        </div>
                        <div className="flex flex-col items-stretch">
                            <p>Name: {request.name}</p>
                            <p>Phone: {request.phone}</p>
                            <p>Address: {request.address}</p>
                            <p>Request Status: {request.status}</p>
                            <p>Return Date: {request?.returnDate}</p>
                            <p>Return Time: {request?.returnTime}</p>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>)}
            <hr />
        </div>
    );
};

export default ManageRequest;