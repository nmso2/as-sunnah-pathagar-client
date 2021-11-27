import { EmailRounded, FacebookRounded } from '@mui/icons-material';
import React from 'react';

const BannerItem = (props) => {
    return (
        <div>
            <img src={props.item} alt='' className='h-48 lg:h-96 w-full'></img>
            <div className="text-xs text-white top-0 left-0 right-0 ml-auto mr-auto p-1 absolute mt-10 bg-gray-400 bg-opacity-50 lg:mt-20 lg:text-4xl lg:p-4">
                <p>বিভিন্ন ইসলামিক বই বিনামূল্যে পড়ার জন্য আমাদের সাথে যোগাযোগ করুন।</p>
                <p>ভেড়ামারা-কুষ্টিয়া</p>
                <p>01623371391</p>

                <a className="mr-4" href="https://www.facebook.com/%E0%A6%86%E0%A6%B8-%E0%A6%B8%E0%A7%81%E0%A6%A8%E0%A7%8D%E0%A6%A8%E0%A6%BE%E0%A6%B9-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0-107120294460789"><FacebookRounded sx={{ fontSize: 40 }} /></a>
                <a href="mailto:assunnahpathagar@gmail.com?subject=Mail%20From%20As%20Sunnah%20Pathagar%20Website"><EmailRounded sx={{ fontSize: 40 }} /></a>
            </div>
        </div>
    );
};

export default BannerItem;