import React from 'react';
import img1 from '../../assets/editorsInsight1.png'
import img2 from '../../assets/editorsInsight2.png'
import img3 from '../../assets/editorsInsight3.png'

const LeftCard = () => {
    return (
        <div>
             <div class="">
            <div class="col mb-5">
                <div class="card h-100">
                    <img src={img1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    <img src={img2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a short card.</p>
                        </div>
                </div>
            </div>
            <div class="col ">
                <div class="card h-100">
                    <img src={img3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LeftCard;