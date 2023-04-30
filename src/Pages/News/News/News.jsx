import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData()

    const { _id, title, details, image_url, category_id } = news

    return (
        <div>
            <div class="card mb-5">
                <img src={image_url} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{details}</p>
                    <Link to={`/category/${category_id}`}>
                        <a href="#" class="btn btn-danger"><FaArrowLeft></FaArrowLeft> All News To This Category</a></Link>
                </div>
            </div>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;