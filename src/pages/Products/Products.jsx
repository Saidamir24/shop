import React, { useState } from 'react'
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, productsSelector, } from "@/store/products/productsSlice"
import { Link } from 'react-router-dom'
import '@/pages//Products/Products.scss'
import Search from '@/components/Search/Search'
import Sort from '@/components/Sort/Sort'
import Pagina from '@/components/Pagination/Pagina'






const Products = () => {

  const { products } = useSelector(productsSelector)
  const dispatch = useDispatch()

  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)


  useEffect(() => {
    dispatch(getAllProducts({}))
  }, [])



  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage



  const currentPosts = products?.slice(firstPostIndex, lastPostIndex)



  return (
    <>
      <div className="container">
        <h4 className="title">Наши продукты</h4>

        <div className="search__sort">
          <Sort />
          <Search />
        </div>
        <div className="box">
          {products?.length !== 100 ? (
            <>
              {products?.map((item) => (
                <Link to={`/products/${item.id}`} className="box__item" key={item.id}>
                  <img src={item.thumbnail} alt="" className='box__item-img' />
                  <h2 className='box__item-title'>{item.title}</h2>
                  <p className='box__item-descr'>{item.description}</p>
                  <p className='box__item-price'>price: {item.price}$</p>
                  <span className='box__item-stock'>stock: {item.stock}</span>
                  <h3 className='box__item-discount'>sale: {item.discountPercentage}</h3>
                </Link>
              ))}
            </>
          ) : (
            <>
              {currentPosts?.map((item) => (
                <Link to={`/products/${item.id}`} className="box__item" key={item.id}>
                  <img src={item.thumbnail} alt="" className='box__item-img' />
                  <h2 className='box__item-title'>{item.title}</h2>
                  <p className='box__item-descr'>{item.description}</p>
                  <p className='box__item-price'>price: {item.price}$</p>
                  <span className='box__item-stock'>stock: {item.stock}</span>
                  <h3 className='box__item-discount'>sale: {item.discountPercentage}</h3>
                </Link>
              ))}
            </>
          )}
      </div>
      <Pagina
        totalPosts={products?.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div >



    </>


  )
}

export default Products