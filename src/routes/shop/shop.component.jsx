import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { categoriesFetchAsync } from "../../store/categories/categories.action";

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';


const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(categoriesFetchAsync())
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
