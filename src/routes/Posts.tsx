import { SetStateAction, useEffect, useState } from "react"
import { Outlet } from "react-router-dom";

export default function Posts(){

    const [posts, setPosts] = useState([] as any[])

    useEffect(() => {
        async function getPosts(){
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts([...resData.posts] as SetStateAction<any[]>)
        }

        getPosts()
    }, [])


    return (
        <div className="card-container flex  gap-5 mt-4 flex-wrap">
            { posts.map(post => (
                <div key={post?.id} className="card w-full max-w-56  bg-gray-100 text-black opacity-30 rounded p-3">
                    <div className=" text-3xl mb-2">
                        { post.title }
                    </div>
                    <div className=" text-md">
                        { post.description }
                    </div>
                </div>
            )) }
            <Outlet />
        </div>
    )
}