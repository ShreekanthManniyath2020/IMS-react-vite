import React, { useEffect, useState } from 'react'
import { ProductBlockWrap } from './Products.styles'
import { DashboardScreenWrap } from '../dashboard/DashboardScreen.styles'
import { BlockContentWrap, BlockTitle } from '../../styles/global/default'
import { Container, Grid, Pagination, Button, ModalOverlay, ModalContent, CloseButton } from './Products.styles'
import ProductCard from '../../components/Product/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLimitedProducts, setPage, fetchAllProducts } from '../../features/products/productsSlice'
import { PRODUCTS_PAGE_LIMIT } from '../../constants/apiUrl'
import AddProductForm from './AddProductForm'

const Products = () => {

  const dispatch = useDispatch();
  const { all, items, status, error, currentPage } = useSelector((state) => state.products);
  const [total, setTotal] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchLimitedProducts(currentPage));
    dispatch(fetchAllProducts());
   // console.log("total:" ,all.length);
    setTotal(Math.ceil(all.length / PRODUCTS_PAGE_LIMIT));
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    dispatch(setPage(currentPage + 1));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) dispatch(setPage(currentPage - 1));
  };


  return (
    <DashboardScreenWrap className="content-area">
      <ProductBlockWrap >
        <div className="block-head">
          <div className="block-head-l">
            <BlockTitle className="block-title">
              <h3>Products</h3>
              <Button onClick={() => setShowForm(true)}>
                Add Product
              </Button>
            </BlockTitle>
          </div>
        </div>
        <BlockContentWrap>
          <div className="cards">
            {
              status === 'loading' ? (
                <p className="text"> Loading products...</p>
              ) :
                (
                  <Container>
                    <Grid>
                      {items.map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </Grid>
                    <Pagination>
                      <span> Page {currentPage} of {total} </span>
                      <Button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</Button>
                      <Button onClick={handleNextPage} disabled={currentPage >= total}>Next</Button>
                    </Pagination>
                  </Container>

                )}

            {showForm && (
              <ModalOverlay onClick={() => setShowForm(false)}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                  <CloseButton onClick={() => setShowForm(false)}>&times;</CloseButton>
                  <AddProductForm onClose={() => setShowForm(false)} />
                </ModalContent>
              </ModalOverlay>
            )}
          </div>
        </BlockContentWrap>
      </ProductBlockWrap>
    </DashboardScreenWrap>
  )
}
export default Products