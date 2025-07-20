import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DashboardScreenWrap } from '../dashboard/DashboardScreen.styles';
import { ProductBlockWrap } from './Products.styles';
import { ProductDetailsWrapper, ImageSection, InfoSection, Title, ActionButtons, Price, Button, Description } from './ProductDetails.styles';
import { fetchProductById } from '../../features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, status, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProductById(id));
        // return () => {
        //   dispatch(clearProductDetail());
        // };
    }, [dispatch, id]);

    return (

        <DashboardScreenWrap className="content-area">
            <ProductBlockWrap>
                <ProductDetailsWrapper>
                    {

                        status === 'loading' ? <p className="text"> Loading product...</p> 
                        : status === 'failed'?  <p>Error: {error}</p> 
                        : !product ? null :
                            (
                                <>
                                    <ImageSection>
                                        <img src={product.images?.[0]} alt={product.title} />
                                    </ImageSection>
                                    <InfoSection>
                                        <Title>{product.title}</Title>
                                        <Price>${product.price}</Price>
                                        <Description>{product.description}</Description>
                                        <ActionButtons>
                                            <Button primary>Add to Cart</Button>
                                            <Button>Buy Now</Button>
                                        </ActionButtons>
                                    </InfoSection>
                                </>

                            )}

                </ProductDetailsWrapper>
            </ProductBlockWrap>
        </DashboardScreenWrap>
    )
}

export default ProductDetails