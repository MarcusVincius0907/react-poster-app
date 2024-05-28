import Modal from "../components/Modal";

export default function NewPost(){
    return (
        <Modal>
            <form className=" p-5 bg-purple-800 min-w-[320px] text-white rounded text-3xl">
                <div className="flex flex-col">
                    <label htmlFor="title"> Title </label>
                    <input className="rounded text-gray-500 outline-none px-3 py-2" name="title" type="text" />
                </div>
                <div className="flex flex-col mt-3">
                    <label htmlFor="description"> Description </label>
                    <textarea className="rounded text-gray-500 outline-none px-3 py-2" name="description"/>
                </div>
                <button className="mt-3 mr-2 p-3 bg-purple-600 rounded" type="submit">Save</button>
                <button className="mt-3">Cancel</button>
            </form>
        </Modal>
    )
}