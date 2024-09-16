import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContent';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrum/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescrptionBox } from '../Components/DescrptionBox/DescrptionBox';
import { RealProduct } from '../Components/RealProduct/RealProduct';

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div className=''>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescrptionBox/>
      <RealProduct/>
    </div>
  )
}
