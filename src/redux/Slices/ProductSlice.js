import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const Product = createSlice({
    name: 'Product',
    initialState: {
        products: [],
        total: 194,
        skip: 0,
        limit: 30,
        loading: false,
        hasMore: true,
        error: null,
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending,(state)=>{
            state.error = null;
            state.loading= true;
        }).
        addCase(fetchProduct.fulfilled, (state, action)=>{
            state.loading = false;
            state.products = [...state.products,...action.payload.products];
            state.total = action.payload.total;
            state.skip  += state.limit;
        }).
        addCase(fetchProduct.rejected, (state, action)=>{
            state.loading = false;
           state.error = action.payload;
        });
    },
})




export const fetchProduct = createAsyncThunk(
    'Product/fetchProduct',
    async ({skip = 0 , limit = 10 },{rejectWithValue}) =>{
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)

            if(!response.ok) throw new Error("error in fetch data");
            const data = await response.json()
            return data

        } catch (error) {
           return rejectWithValue(error)  
        } 
    }
)



export default Product.reducer;