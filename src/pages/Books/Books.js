import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Shared/Header/Header';
AOS.init();

const Books = () => {
    return (
        <div>
            <Header></Header>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '45%',
                        height: 500,
                    },
                }}
            >
                <Paper
                    data-aos="fade-up-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" elevation={3} />
                <Paper
                    data-aos="fade-up-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" elevation={3} />
                <Paper
                    data-aos="fade-up-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" elevation={3} />
                <Paper
                    data-aos="fade-up-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" elevation={3} />
                <Paper
                    data-aos="fade-up"
                    data-aos-duration="3000" elevation={3} />
                <Paper
                    data-aos="fade-up"
                    data-aos-duration="3000" elevation={3} />
            </Box>
        </div>
    );
};

export default Books;