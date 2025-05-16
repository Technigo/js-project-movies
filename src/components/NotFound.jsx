import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center gap-10 w-full text-white py-40'>
      <h2 className='text-2xl'>Page Not Found</h2>
      <Link to='/' className='py-3 px-5 rounded-xl bg-neutral-900 border border-white/20'>
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound