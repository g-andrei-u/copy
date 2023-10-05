import React from 'react';
import AdminHeading from '../../Componets/AdminHeading';
import ShowArticlesButton from '../../Componets/ShowArticlesButton';

const ShowArticlesAdmin = () => {
    return (
        <>
        <AdminHeading />
        <div className="admin-form">
            <form>
                <h1>Edit Articles:</h1>
                <ShowArticlesButton />
            </form>
        </div>
        </>
    )
};


export default ShowArticlesAdmin;