import ProductsLayout from '@/widgets/layouts/productsLayout'
import ProductModal from '@/widgets/productModal/productModal'
import React from 'react'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProductsLayout>
      {children}
      <ProductModal />
    </ProductsLayout>
  )
}
