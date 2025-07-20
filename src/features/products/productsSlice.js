import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import * as productAPI from "../../api/endpoints/productsEndpoints"
import * as productAPI from "../../services/productService"

// 🔄 Fetch Products with limit/offset
export const fetchLimitedProducts = createAsyncThunk(
  'products/fetchProductsWithPageLimit',
   async (page = 1) => {
    const response =  await productAPI.fetchProductsWithPageLimit(page);
      // Default -  return response.data;
    //  for dummy api format - response.data.products);
    
   return response.data.products;
  }
);

// 🔄 Fetch All Product
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
   async () => {
   const response =  await productAPI.fetchAllProducts();
   // return response.data;
   //console.log("tottal : ", response.data.products.length);
   return response.data.products;
  }
);


// 🔄 Fetch Product Details by ID
export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (id) => {
    const response = await productAPI.fetchProductById(id);
    console.log(response);
    return response.data;
  }
);

// 🔄 Create new Product
export const addProduct = createAsyncThunk('product/addProduct', async (product) => {
  const response = await productAPI.createProduct(product);
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    all: [],
    items: [],
    product: null,
    status: 'idle',
    error: null,
    currentPage: 1,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    clearProductDetail(state) {
      state.productDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder

    // ✅ All Products
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.all = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // ✅ Limited Products (paging)
      .addCase(fetchLimitedProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLimitedProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchLimitedProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      //✅ Product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // ✅ Add Product
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload); // Update the list if needed
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

  },
});

export const { setPage } = productsSlice.actions;
export default productsSlice.reducer;