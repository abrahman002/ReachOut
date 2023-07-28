import React, { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Modal = () => {
    const [jobTitle, setJobTitle] = useState('');

    const handleChange = (e) => {
        setJobTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`New job title: ${jobTitle}`);
        closeModal();
    };

    const closeModal = () => {
        window.my_modal_3.close();
    };

    return (
        <div>
            <Link className=' btn-success rounded-full w-52 text-white normal-case flex gap-2 p-4 ite' onClick={() => window.my_modal_3.showModal()}>
                Create New Job <AiOutlinePlus />
            </Link>
            <dialog id="my_modal_3" className="modal text-center" >
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                    <h3 className="font-bold text-lg mb-3">Create New Job</h3>
                    <input
                        type="text"
                        placeholder="Write a Job Title Ex. Front End Developer"
                        className="input input-bordered mb-4"
                        value={jobTitle}
                        onChange={handleChange}
                    />
                    <div className="modal-actions">
                       
                        <button type="submit" className="btn btn-success normal-case w-52 rounded-xl text-white" onClick={handleSubmit}>
                            Create
                        </button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default Modal;
