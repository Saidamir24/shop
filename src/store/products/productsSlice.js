import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

const initialState = {
    products: null,
    product: null,
    searchProducts: null
}

export const getAllProducts = createAsyncThunk('productsSlice/getAllProducts', async ({ search = "" }) => {
    let res = await fetch(`https://dummyjson.com/products${!search ? "?limit=100" : `/search?q=${search}`}`)
    let data = await res.json()
     
    console.log(data);
    return data.products
})

export const getProduct = createAsyncThunk('productsSlice/getProduct', async (id) => {
    let res = await fetch('https://dummyjson.com/products/' + id)
    let data = await res.json()
    return data
})


/* 
 export const fetchCommets = createAsyncThunk("productsSlice/currentPage", async() => {
    const res = await fetch (`https://dummyjson.com/products?limit=12=${currentPage}`)
    const data = await res.json()
   return data

 }) */
    
  
 

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        sortProducts: (state, action) => {
            state.products?.sort((a, b) => {
              if (action.payload === "title") {
                return a.title.localeCompare(b.title);
              } else {
                if (a[action.payload] > b[action.payload]) {
                  return -1;
                } else if (a[action.payload] < b[action.payload]) {
                  return 1;
                }
              }
            });
          },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            console.log('data is ready');
            state.products = action.payload
        }),
            builder.addCase(getProduct.fulfilled, (state, action) => {
                state.product = action.payload
            })
    }
})



export default productsSlice.reducer


export const { sortProducts } = productsSlice.actions;


export const productsSelector = (state) => state.products  
