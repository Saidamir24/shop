import React from 'react'
import '@/components/Search/Search.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchIcon } from 'lucide-react'
import { getAllProducts } from '@/store/products/productsSlice'


const Search = () => {

  const [value, setValue] = useState("")


  const dispatch = useDispatch()


  const clear = () => {
    setValue('')
  }

  return (
    <>
      <div className="search">
        <input

          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              dispatch(getAllProducts({ search: value }));
            } 
           
          }}
          type="text"
          placeholder="Поиск"
          className="search__input"
        />
        <button
          onClick={() => dispatch(getAllProducts({ search: value }))}
          className="search__button"
        >
          <SearchIcon onClick={clear} />
        </button>
      </div>
    </>
  )
}

export default Search