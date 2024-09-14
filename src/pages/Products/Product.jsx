import React, { useState } from 'react'

import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getProduct, productsSelector } from "../../store/products/productsSlice"
import { Link, useParams } from 'react-router-dom'
import '../Products/Products.scss'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Zoom, Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'

//const [thumbsSwiper, setThumbsSwiper] = useState('');

const Product = () => {


    const { product } = useSelector(productsSelector)
    // const [productImg, setProductImg] = useState(product?.thumbnail)
    const dispatch = useDispatch()
    let { id } = useParams()

    useEffect(() => {
        dispatch(getProduct(id))
    }, [])
    return (
        <>
            {product && (
                <div className="container">
                    <div className="block">
                        <div className="item">
                            <div className="item__left">

                                <div className="item__left-box">

                                    <Swiper
                                        // style={{
                                        //     '--swiper-navigation-color': '#fff',
                                        //     '--swiper-pagination-color': '#fff',
                                        // }}
                                        zoom={true}
                                        navigation={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Zoom, Navigation, Pagination]}
                                        className="mySwiper"
                                    >
                                        {product.images.map((img, i) => (
                                            <SwiperSlide key={i}>
                                                {/* <div> */}
                                                    <img src={img} alt="" className="item__left-img" />
                                                {/* </div> */}
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                {/* <img src={product.thumbnail} alt="" /> */}

                            </div>
                            <div className="item__right">
                                <h2 className='box__item-title'>{product.title}</h2>

                                <p className='box__item-price'>price: {product.price}$</p>
                                <span className='box__item-stock'>stock: {product.stock}</span>
                                <h3 className='box__item-discount'>sale: {product.discountPercentage}</h3>
                            </div>
                            <div className="box__item-links">
                                <Link to='/products' className='box__item-link'>Вернуться назад</Link>
                                <p className="box__item-text">Если Вы хотите приобрести данный продукт, перейдите на главную страницу и свяжитесь с нами</p>
                            </div>
                        </div>
                    </div>



                    {/* <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        zoom={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Zoom, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {product.images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div>
                                    <img src={img} alt="" className="item__left-img" />
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper> */}
                </div>




            )}
        </>
    )
}

export default Product