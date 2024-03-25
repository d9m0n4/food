export const Header = ({
  logo,
  navigation,
  userInfo,
}: {
  logo: React.ReactNode
  navigation: React.ReactNode
  userInfo: React.ReactNode
}) => (
  <header>
    <div className='container'>
      <div className='flex gap-4 items-center justify-between'>
        <div className='flex'>{logo}</div>
        <div className='flex mr-auto'>{navigation}</div>
        <div className='flex'>{userInfo}</div>
      </div>
    </div>
  </header>
)
