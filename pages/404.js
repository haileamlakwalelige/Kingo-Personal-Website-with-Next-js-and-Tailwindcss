import Link from "next/link";

const Notfound=()=>{
    return(
        <div className="h-[78vh] bg-gray-50 text-black font-serif items-center justify-center py-48 text-center px-32">
            <h2 className="font-bold text-2xl ">OOPS Not Found</h2>
            <p className="font-100 text-lg">Return to the <Link href="/" className="text-blue-800 font-bold underline-offset-3 ">Home </Link>page</p>
        </div>
    );
}

export default Notfound;