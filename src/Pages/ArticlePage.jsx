import React from "react";


const ArticlePage = (props) => {
    const content = props.content;


    return (
        <section>
            <div className="article-page">
                <div className="inner-article-page">
                    <h1>{props.title}</h1>
                    <p style={{opacity: '0.7'}}>Poasted on {props.date}</p>
                    <br/>
                    <div className="content">
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ArticlePage;