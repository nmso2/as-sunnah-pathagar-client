import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BookLoading = () => {
    return (
        <div>
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" /><br />
            <Box sx={{ width: 300 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
        </div>
    );
};

export default BookLoading;