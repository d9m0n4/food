import ProductsLayout from '@/widgets/layouts/productsLayout'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProductsLayout>{children}</ProductsLayout>
}
