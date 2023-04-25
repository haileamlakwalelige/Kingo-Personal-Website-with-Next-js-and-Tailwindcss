import Link from "next/link";

export async function getStaticProps(){
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const data =await res.json()

    return{
        props:{
            users:data,
        }
    }
}

const Ninja=({users})=>{
    return(
        <div className="bg-gray-50 text-black font-serif h-[100] mb-3 pb-3 list-none cursor-pointer ">  
            <h2 className="font-bold text-4xl text-center text-gray-800 py-3 pt-6 ">Team  Members</h2>  
            {users.map(user=>(
                <Link href={`/members/${user.id}`} key={user.id} className="mx-20 pl-10 flex flex-col h-20 shadow-lg style-none border-2 border-white hover:border-l-8 ml-4 hover:border-l-blue-800">
                <li className="font-100 text-2xl font-serif pt-3 my-3  bg-white">{user.name}</li>
                </Link>
            ))}   
        </div>
    );
}

export default Ninja;