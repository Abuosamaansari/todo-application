import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// fetch products from API
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
});

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default productSlice.reducer;
