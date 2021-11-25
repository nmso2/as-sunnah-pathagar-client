import React from 'react';

const BannerItem = (props) => {
    return (
        <div>
            <img src={props.item} alt='' className='mx-auto h-60 lg:h-96 w-full'></img>
        </div>
    );
};

export default BannerItem;