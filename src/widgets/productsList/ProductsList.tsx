import ProductItem from '@/entities/productItem/ProductItem'
import React from 'react'

import imga2 from '../../../public/h3.jpg'
import imga from '../../../public/mahmoud-fawzy-BOJ8RP7-VQA-unsplash.jpg'

const ProductsList = () => (
  <div className='grid grid-cols-4 gap-8'>
    <ProductItem
      img={imga}
      title={'Калифорния кани'}
      info={'200 гр.'}
      description={'Рис, запеченный тунец, сыр, огурец, тобико'}
      price={350}
    />
    <ProductItem
      img={imga}
      title={'Калифорния кани'}
      info={'200 гр.'}
      description={'Рис, запеченный тунец, сыр, огурец, тобико'}
      price={350}
    />
    <ProductItem
      img={imga}
      title={'Калифорния кани'}
      info={'200 гр.'}
      description={'Рис, запеченный тунец, сыр, огурец, тобико'}
      price={350}
    />
    <ProductItem
      img={imga}
      title={'Калифорния кани'}
      info={'200 гр.'}
      description={'Рис, запеченный тунец, сыр, огурец, тобико'}
      price={350}
    />
    <ProductItem
      img={imga}
      title={'Калифорния кани'}
      info={'200 гр.'}
      description={'Рис, запеченный тунец, сыр, огурец, тобико'}
      price={350}
    />
  </div>
)

export default ProductsList
