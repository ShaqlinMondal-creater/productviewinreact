import React from 'react';
import './Main.css'
import ImgBox from './ImgBox';
import Details from './Details';

function Product() {
    return (
        <div className="container">
            <ImgBox />
            <Details 


            products={[{
               
                class:"black active",
                data_color:"#000",
                data_sec_color:"#212121",
                pic:"https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true",
            },
            {
                class:"red",
                data_color:"#7E021C",
                data_sec_color:"#bd072d",
                pic:"https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true",
            },
            {
                class:"orange",
                data_color:"#CE5B39",
                data_sec_color:"#F18557",
                pic:"https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true",
            },
            ]}  
            />


        </div>
    );
}

export default Product;