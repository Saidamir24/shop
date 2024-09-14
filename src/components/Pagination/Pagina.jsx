import React from 'react'
import '@/components/Pagination/Pagination.scss'

const Pagina = ({ totalPosts, postsPerPage, setCurrentPage }) => {

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage, setCurrentPage); i++) {
    pages.push(i)
  }

  return (
    <>


      <div className="pagina">
        <ul className="pagina__list">

        {pages.map((page, index) => {
          return <button key={index} onClick={() => setCurrentPage(page)} className='pagina__list-btn'>{page}</button>
        })}
        </ul>
      </div>


    </>
  )
}

export default Pagina