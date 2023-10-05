import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AdminHeading from '../../Componets/AdminHeading';

const UpdateArticleAdmin = (props) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setContent(props.content[0]);
        setTitle(props.title);
        setDate(props.date);
    }, [])


    const axiosPutData = async (_id) => {
        const formData = {
            id: _id,
            title: title,
            date: date,
            content: content
        }

        await axios.put(`http://localhost:4000/articles`, formData)
        .then(res => console.log(res))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length >= 2) {
            axiosPutData(props._id);
            setTitle('');
            setDate('');
            setContent('');
            alert('Article Was Updated');
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label>Date:</label>
                    <input
                    type="date"
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                    defaultValue={props.date}
                    />
                </div>

                <div>
                    <label>Content:</label>              
                    <ReactQuill
                        theme='snow' 
                        modules={modules}
                        value={content}
                        onChange={content => setContent(content)}
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


export default UpdateArticleAdmin;