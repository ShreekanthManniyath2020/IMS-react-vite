import React from 'react'
import { useDispatch } from 'react-redux'
import { FormWrapper, Input, TextArea, Title,SubmitButton} from './AddProductForm.styles';
import { useState } from 'react';
import { addProduct } from '../../features/products/productsSlice';

const AddProductForm = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = 'Title is required';
        if (!price || isNaN(price) || parseFloat(price) <= 0) newErrors.price = 'Valid price is required';
        if (!category.trim()) newErrors.category =  'Category ID must be > 0';
        if (!description.trim()) newErrors.description = 'Description is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const newProduct = {
            title,
            price: parseFloat(price),
            description,
            categoryId: category,
            image: ['https://dummyimage.com/640x4:3/'],
        };

        dispatch(addProduct(newProduct));
        setTitle('');
        setPrice('');
        setCategory('');
        setDescription('');
        setErrors({});
    };

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <Title>Add New Product</Title>
            <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

            <Input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}

            <Input
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}

            <TextArea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}

            <SubmitButton type="submit">Add Product</SubmitButton>

        </FormWrapper>
    )
}

export default AddProductForm