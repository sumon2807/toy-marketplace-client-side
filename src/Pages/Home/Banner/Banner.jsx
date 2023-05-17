import React from 'react';
import img1 from '../../../assets/images/banner/banner1.jpg'
import img2 from '../../../assets/images/banner/banner2.jpg'
import img3 from '../../../assets/images/banner/banner3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute lg:left-10 lg:top-28 top-20 left-4">
                    <div className='text-gray-700 lg:space-y-7 w-3/5 pl-4'>
                        <h2 className='text-3xl font-extrabold lg:text-6xl lg:font-extrabold'>Cute little wooden birds</h2>
                        <p className='mt-2 lg:text-2xl text-xl font-semibold lg:font-bold'>Toys</p>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute lg:left-10 lg:top-28 top-20 left-4">
                    <div className='text-gray-700 lg:space-y-7 w-3/5 pl-4'>
                        <h2 className='text-3xl font-extrabold lg:text-6xl lg:font-extrabold'>Happy Fox Gray Doll</h2>
                        <p className='mt-2 lg:text-2xl text-xl font-semibold lg:font-bold'>Toys</p>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute lg:left-10 lg:top-28 top-20 left-4">
                    <div className='text-gray-700 lg:space-y-7 w-3/5 pl-4'>
                        <h2 className='text-3xl font-extrabold lg:text-6xl lg:font-extrabold'>Mima Xari Stroller</h2>
                        <p className='mt-2 lg:text-2xl text-xl font-semibold lg:font-bold'>Stroller</p>
                    </div>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mx-2">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;