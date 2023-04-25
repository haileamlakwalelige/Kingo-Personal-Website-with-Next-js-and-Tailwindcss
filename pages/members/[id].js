export const getStaticPaths= async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const posts=await res.json();

    const paths=posts.map(post =>({
        params:{
            id:post.id.toString(),
        }
    }))
    return{
        paths, fallback:false
    }
}

export const getStaticProps= async(context)=>{
    const id=context.params.id;
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const posts =await res.json();

    return{
        props:{
            user:posts,
        }
    }
}

const Detail=({user})=>{
    return(
        <div className="bg-gray-50 text-black font-serif h-[100vh] list-none py-20 px-32 justify-center items-center text-center">
        <li className="py-3 pt-6 px-32 flex h-20 border-gray-50 bg-white shadow-lg my-6 hover:border-l-8 hover:border-blue-800 mx-3"><p className="font-bold text-lg font-serif">Full Name :</p><p className="pl-4 font-bold">{user.name}</p></li> 
        <li className="py-3 pt-6 px-32 flex h-20 border-gray-50 bg-white shadow-lg my-6 hover:border-l-8 hover:border-blue-800 mx-3"><p className="font-bold text-lg font-serif">User Name :</p><p className="pl-4 font-bold ">{user.username}</p></li>   
        <li className="py-3 pt-6 px-32 flex h-20 border-gray-50 bg-white shadow-lg my-6 hover:border-l-8 hover:border-blue-800 mx-3"><p className="font-bold text-lg font-serif">website :</p><p className="pl-4 font-bold ">{user.website}</p></li>   
        <li className="py-3 pt-6 px-32 flex h-20 border-gray-50 bg-white shadow-lg my-6 hover:border-l-8 hover:border-blue-800 mx-3"><p className="font-bold text-lg font-serif">Street :</p><p className="pl-4 font-bold ">{user.address.street}</p></li>
        <li className="py-3 pt-6 px-32 flex h-20 border-gray-50 bg-white shadow-lg my-6 hover:border-l-8 hover:border-blue-800 mx-3"><p className="font-bold text-lg font-serif">Phone Number :</p><p className="pl-4 font-bold ">{user.phone}</p></li>
        <li className="py-3 pt-6 px-32 flex h-20 border-gray-50 bg-white shadow-lg my-6 hover:border-l-8 hover:border-blue-800 mx-3"><p className="font-bold text-lg font-serif">Company Name</p><p className="pl-4 font-bold ">{user.company.name}</p></li>
        </div>
    )
}

export default Detail;