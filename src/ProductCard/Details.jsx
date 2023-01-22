import React from 'react';

function Details(props) {
    return (
        <>
            <div className="details">
                <div className="content">
                    <h2>Jordan Proto-Lyte <br />
                        <span>Running Collection</span>
                    </h2>
                    <p>
                        Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte
                        is
                        made for all-day, bouncy comfort.
                        Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides
                        breathable support.
                        Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning.
                        Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of
                        surfaces.
                    </p>
                    <p className="product-colors">Available Colors:

                    {props.products.map((product, index) => {
                    return( 
                        <span className={product.class}
                        data-color-primary={product.data_color}
                        data-color-sec={product.data_sec_color}
                        data-pic={product.pic}
                        key={index}
                        ></span>
                        );   
                    })}
                    </p>
                      
                    <h3>Rs. 12,800</h3>
                    <button>Buy Now</button>
                </div>
            </div>
        </>
    );
}

export default Details;