import React from 'react';

import '../asset/Header.scss'
import '../asset/vieu.scss'

import Carousel from './carousel'
import GrosCarousel from './GrosCaroussel'
import Pub from './pub'

import Pagination from './pagination'
import CarouselNew from "./NewCarousel"
import Video from './Video'




class DetailFilm extends React.Component{
    
    render(){
        const { top, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, next, previous} = this.props;
    
        return(
            <>
                <CarouselNew/>
                
                <div className="container">
                <div>
                <Carousel titre="Films" data1={data1} data2 ={data2} data3 ={data3} data4 ={data4} />
                <Pagination next={next} previous={previous} />
                <Carousel titre = "News" data1={data5} data2 ={data6} data3 ={data7} data4 ={data8} />
                <Carousel titre= "Séries" data1={data9} data2 ={data10} data3 ={data11} data4 ={data12} />
                </div>
                <div>
                    <Pub />
                </div>
                </div>
                <Video/>
               

            </>
        )
    }
}

export default DetailFilm;
