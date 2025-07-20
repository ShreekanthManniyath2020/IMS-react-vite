import axios from "../axiosInstance";
import { PRODUCTS_PAGE_LIMIT } from "../../constants/apiUrl";

// export const fetchProductsWithPageLimit = (offset,limit) => axios.get('/api/v1/products',{
//         params: {
//           offset,
//           limit
//         }
//       });

export const fetchProductsWithPageLimit1 = (page) => axios.get(`/api/v1/products?offset=${(page - 1) * PRODUCTS_PAGE_LIMIT}&limit=${PRODUCTS_PAGE_LIMIT}`);      

export const fetchProducts = () => axios.get('/api/v1/products');      
export const fetchProductById = (id) => axios.get(`/api/v1/products/${id}`);
export const createProduct = (data) => axios.post("//api/v1/products", data);
export const updateProduct = (id, data) => axios.put(`/api/v1/products/${id}`, data);
export const deleteProduct = (id) => axios.delete(`/api/v1/products/${id}`);
