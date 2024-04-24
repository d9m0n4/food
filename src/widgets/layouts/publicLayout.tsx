import { Header } from '@/widgets/header/Header'

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header variant='public' />
      <main className='flex min-h-screen flex-col items-center my-8'>
        {children}
      </main>
    </>
  )
}
