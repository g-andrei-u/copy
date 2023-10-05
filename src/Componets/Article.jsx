import React, { useEffect, useState } from "react";


const Article = (props) => {
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content[0]);
    const [imgPath, setImgPath] = useState(props.imgPath);


    useEffect(() => {
        if (`../../uploads/${imgPath}`) {
            setImgPath(`../../uploads/${imgPath}`)
        }
        if (title.length > 50) {
            setTitle(props.title.slice(0, 49) + '...');
        }
        if (content.length > 240) {
            setContent(content.slice(0, 230) + '...');
        }
    },[])

    return (
        <article>
            <img src={imgPath} />
            <div className="inner-article">
                <h1>{title}</h1>
                <p style={{opacity: 0.7}}>Poasted on {props.date}</p>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </article>
    )
}


export default Article;