import axios from "../api/axiosInstance"
import { PRODUCTS_PAGE_LIMIT } from "../constants/apiUrl";

//export const fetchProductsWithPageLimit = (page) => axios.get(`/products?offset=${(page - 1) * PRODUCTS_PAGE_LIMIT}&limit=${PRODUCTS_PAGE_LIMIT}`);  
 
//'https://dummyjson.com/products?limit=10&skip=10&select=title,price'

export const fetchProductsWithPageLimit = (page) => axios.get(`/products?limit=${PRODUCTS_PAGE_LIMIT}&skip=${(page-1) * PRODUCTS_PAGE_LIMIT}`);    

export const fetchAllProducts = () => axios.get('/products');      
export const fetchProductById = (id) => axios.get(`/products/${id}`);
export const createProduct = (data) => axios.post("/products/add", data);
//export const createProduct = (data) => axios.post("/products", data);
export const updateProduct = (id, data) => axios.put(`/products/${id}`, data);
export const deleteProduct = (id) => axios.delete(`/products/${id}`);