import Logo from '../logo.png'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[50px]' src={Logo} alt="" />
      <a className='text-blue-500 text-3xl' href="/">Home</a>
      <a className='text-blue-500 text-3xl' href="/watchlist">Watch List</a>
    </div>
  )
}

export default Navbar
