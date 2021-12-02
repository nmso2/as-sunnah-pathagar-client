import React from 'react';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';

const ReviewLoading = () => {
    return (
        <div>
            <Box sx={{ width: 300 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
        </div>
    );
};

export default ReviewLoading;