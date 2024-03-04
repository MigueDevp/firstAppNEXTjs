import Link from 'next/link'
export default function Navegation() {
  return (
    <nav className="bg-purple-700 p-4">
       <div className="container mx-auto flex items-center justify-center">
          <div className="space-x-4">
              <Link href="/" className='text-white hover:text-gray-700'>HOME</Link>
              <Link href="./acerca" className='text-white hover:text-gray-700'>ACERCA</Link>
              <Link href="#" className='text-white hover:text-gray-700'>DOCUMENTATION</Link>
              <Link href="#" className='text-white hover:text-gray-700'>BUY</Link>
       </div>
           </div>
    </nav> 
  )
      
}