import Link from 'next/link';

const Navbar=()=>{
    return(
        <div className="sm:flex sticky top-0 justify-between items-center bg-gray-50 h-20 border-b-4 border-gray-400">
        <div className="font-serif text-blue-800">
            <h2 className="font-bold text-3xl font-serif pl-4 hover:text-green-500 hover:text-4xl text-center sm:text-start
            py-2">Kingo</h2>
        </div>
        <div>
            <ul className="flex gap-2 pr-2 p-2 xs:pl-12 sm:pl-0">
                <Link href="/" className="text-2xl font-bold underline-none bg-white font-serif text-blue-800 hover:text-green-500 duration-300 hover:border-b-4 hover:border-green-500 sm:px-3">Home</Link>
                <Link href="/about" className="text-2xl font-bold underline-none bg-white font-serif text-blue-800 hover:text-green-500 duration-300 hover:border-b-4 hover:border-green-500 sm:px-3">About</Link>
                <Link href="/members" className="text-2xl font-bold underline-none bg-white font-serif text-blue-800 hover:text-green-500 duration-300 hover:border-b-4 hover:border-green-500 sm:px-3">Members</Link>
            </ul>
        </div>
        </div>
    )
}

export default Navbar;