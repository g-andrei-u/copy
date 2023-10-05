import React, { useState } from 'react';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import AdminHeading from '../../Componets/AdminHeading';

const DeleteArticlesAdmin = (props) => {
    const [showAlert, setShowAlert] = useState(false);


    const axiosPutData = async (_id) => {
        const formData = {
            id: _id,
        }

        await axios.delete(`http://localhost:4000/articles`, {
            data: {
                id: _id
            }
        })
        .then(res => console.log(res))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!showAlert) {
            alert('Are you Sure ?');
            setShowAlert(true);
        } else if (props._id && showAlert) {
            axiosPutData(props._id);
            alert('Article Deleted!');
        } 
    };


    return (
        <>
        <AdminHeading />
        <div className="admin-form">
            <form>
                <div>
                    <label>Title: {props.title}</label>
                </div>

                <button type="submit" onClick={handleSubmit}>Delete</button>
            </form>
        </div>
        </>
    )
};


export default DeleteArticlesAdmin;