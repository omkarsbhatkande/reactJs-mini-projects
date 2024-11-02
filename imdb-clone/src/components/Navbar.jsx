import Logo from '../logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[50px]' src={Logo} alt="" />
      <Link className='text-blue-500 text-3xl' to="/">Home</Link>
      <Link className='text-blue-500 text-3xl' to="/watchlist">Watch List</Link>
    </div>
  )
}

export default Navbar