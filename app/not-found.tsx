import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='container mx-auto px-3 lg:px-0 text-center py-20'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}