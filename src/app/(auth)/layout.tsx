import AuthLayout from '@/widgets/layouts/authLayout'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthLayout>{children}</AuthLayout>
}
