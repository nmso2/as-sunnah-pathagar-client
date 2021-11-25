import React from 'react';
import Carousel from 'react-material-ui-carousel';
import BannerItem from '../BannerItem/BannerItem';
import banner1 from '../../../../resources/images/bannerImage/banner-1.jpg'
import banner2 from '../../../../resources/images/bannerImage/banner-2.jpg'
import banner3 from '../../../../resources/images/bannerImage/banner-3.jpg'
import banner4 from '../../../../resources/images/bannerImage/banner-4.jpg'
import banner5 from '../../../../resources/images/bannerImage/banner-5.jpg'
import banner6 from '../../../../resources/images/bannerImage/banner-6.jpg'
import banner7 from '../../../../resources/images/bannerImage/banner-7.jpg'
import banner8 from '../../../../resources/images/bannerImage/banner-8.jpg'
import banner9 from '../../../../resources/images/bannerImage/banner-9.jpg'
import { Box, Button, Grid, Typography } from '@mui/material';
import { EmailRounded, FacebookRounded } from '@mui/icons-material';

const Banner = () => {

    const items = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9]

    return (
        <Box>
            <Grid container spacing={2} className="bg-blue-100">
                <Grid item xs={12} md={6}>
                    <div className="text-4xl lg:mt-20 lg:text-left p-3 bg-blue-100">
                        <p>বিভিন্ন ইসলামিক বই বিনামূল্যে পড়ার জন্য আমাদের সাথে যোগাযোগ করুন।</p>
                        <p>ভেড়ামারা-কুষ্টিয়া</p>
                        <p>01623371391</p>

                        <a className="mr-4" href="https://www.facebook.com/%E0%A6%86%E0%A6%B8-%E0%A6%B8%E0%A7%81%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%BE%E0%A6%B9-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0-107120294460789"><FacebookRounded sx={{ fontSize: 40 }} /></a>
                        <a href="mailto:mustakrashid2001@gmail.com?subject=Mail%20From%20As%20Sunnah%20Pathagar%20Website"><EmailRounded sx={{ fontSize: 40 }} /></a>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Carousel
                        fullHeightHover={true}
                        duration={500}
                        swipe={true}
                        animation="slide"
                        interval={2000}
                        indicators={false}
                    >
                        {
                            items.map((item, i) => <BannerItem key={i} item={item} />)
                        }
                    </Carousel>
                </Grid>
            </Grid>
        </Box>

    );
};

export default Banner;