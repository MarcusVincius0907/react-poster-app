import { MdMessage, MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MainHeader() {
    return (
        <header className=" w-full border-b-2 border-gray-100 mt-32 flex pb-4 px-3 justify-between">
            <div className=" flex items-center gap-4">
                <MdMessage size={40} />
                <h1 className=" text-5xl">React Poster</h1>
            </div>
            <div>
                <Link to="/create-post" className=" p-3 bg-slate-300 text-black rounded opacity-50 flex gap-2 items-center cursor-pointer hover:opacity-90">
                    <MdPostAdd size={30} />
                    <span>New Post</span>
                </Link>
            </div>
        </header>
    )
}


