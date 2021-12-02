import React from 'react';
import Carousel from 'react-material-ui-carousel';
import BannerItem from '../BannerItem/BannerItem';
import banner1 from '../../../../resources/images/bannerImage/banner-1.jpg'
import banner2 from '../../../../resources/images/bannerImage/banner-2.jpg'
import banner3 from '../../../../resources/images/bannerImage/banner-3.jpg'
import banner4 from '../../../../resources/images/bannerImage/banner-4.jpg'
import banner5 from '../../../../resources/images/bannerImage/banner-5.jpg'
import banner6 from '../../../../resources/images/bannerImage/banner-6.jpg'
import { Box } from '@mui/material';

const Banner = () => {

    const items = [banner1, banner2, banner3, banner4, banner5, banner6]

    return (
        <Box>
            <Carousel
                fullHeightHover={true}
                duration={1000}
                swipe={true}
                interval={3000}
                indicators={false}
            >
                {
                    items.map((item, i) => <BannerItem key={i} item={item} />)
                }
            </Carousel>
        </Box>

    );
};

export default Banner;