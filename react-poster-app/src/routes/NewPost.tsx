import { useState } from "react";
import Modal from "../components/Modal";
import { Link, useNavigate } from "react-router-dom";

export default function NewPost() {

    const [formData, setFormData] = useState({ title: '', description: '' })
    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault()
        if (formData.title && formData.description) {
            fetch('http://localhost:8080/posts', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            navigate("..");
        }


    }

    function handleFieldChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <Modal>
            <form onSubmit={onSubmit} className=" p-5 bg-purple-800 min-w-[320px] text-white rounded text-3xl">
                <div className="flex flex-col">
                    <label htmlFor="title"> Title </label>
                    <input className="rounded text-gray-500 outline-none px-3 py-2" onChange={handleFieldChange} name="title" type="text" />
                </div>
                <div className="flex flex-col mt-3">
                    <label htmlFor="description"> Description </label>
                    <textarea className="rounded text-gray-500 outline-none px-3 py-2" onChange={handleFieldChange} name="description" />
                </div>
                <button className="mt-3 mr-2 p-3 bg-purple-600 rounded" type="submit">Save</button>
                <Link to=".." type="button">
                    Cancel
                </Link>
            </form>
        </Modal>
    )
}