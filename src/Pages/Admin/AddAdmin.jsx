import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AdminHeading from '../../Componets/AdminHeading';

const AddAdmin = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [img, setImg] = useState(null);
    const [error, setError] = useState('');


    const axiosPostData = async () => {

        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('content', content);
        formData.append('img', img);

        await axios.post('http://localhost:4000/articles', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => console.log(res))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length >= 2 || content.length > 5) {
            axiosPostData();
            setTitle('');
            setDate('');
            setContent('');
            setImg(null);
            alert('Article was Uploaded with Succes!');
        } else {
            setError('You need a title and content');
        }
    };

    const modules = {
        toolbar: [
            [{ 'header': [2, 3, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            ["link", "image", "video"],
            [{ list:  "ordered" }, { list:  "bullet" }],
            [{ 'color': [] }, { 'background': [] }]
        ]
    }


    return (
        <>
        <AdminHeading />
        <div className="admin-form">
            <form>
                <div>
                    <label>Title:</label>
                    <input
                    type="text"
                    name="title"
                    placeholder='Title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label>Date:</label>
                    <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label>Thumbnail:</label>
                    <input
                    type="file"
                    name="image"
                    onChange={(e) => setImg(e.target.files[0])}
                    accept='image/*'
                    required
                    />
                </div>

                <div>
                    <label>Content:</label>              
                    <ReactQuill
                        theme='snow' 
                        modules={modules} 
                        onChange={(content) => setContent(content)}
                        style={{height: '60vh', width: '100%', marginBottom: '90px'}} 
                        placeholder="Content goes here..." 
                    />
                </div>

                <button type="submit" onClick={handleSubmit}>Submit</button>
                {error.length > 2? <p style={{color: 'red'}}>{error}</p>: ''}
            </form>
        </div>
        </>
    )
};


export default AddAdmin;