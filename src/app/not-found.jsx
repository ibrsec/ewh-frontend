import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='my-16 flex flex-col items-center gap-7 px-2'>
      <h2 className='text-3xl font-bold text-red'>Not Found</h2>
      <p className='text-dark-red poppins-font text-lg'>Could not find requested resource</p>
      <Link href="/" className='primary-button-main'>Return Home</Link>
    </div>
  )
}