import PublicLayout from '@/widgets/layouts/publicLayout'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PublicLayout>{children}</PublicLayout>
}
