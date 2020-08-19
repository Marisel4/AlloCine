import React from 'react';
import '../asset/GrosCarousel.scss'
import {getImageFromApi} from '../api/Api'

class CarouselG extends React.Component{

    render(){
        const {top} = this.props;
        
        let card;
        let data =[1,2,2,4]
        if(!(top==undefined)){
          card = top.map((item)=>{
              if(item == top[0]){
              return  (
                <> 
                    <div className="row">
                        <div className="col" style={{width:"100%"}}>
                        <div className="carousel-item active " >
                            <img src={getImageFromApi(item.backdrop_path)} className="d-block w-100" alt="..." />
                        </div>
                        </div>
                    </div>
                </>
              )
            } else{
                return  (
                    <> 
                        <div className="row " style={{width:"100%"}}>
                            <div className="col" style={{width:"100%"}}>
                            <div className="carousel-item">
                                <img src={getImageFromApi(item.backdrop_path)} className="d-block w-100" alt="..." />
                            </div>
                            </div>
                        </div>
                    </>
                  )
            }
            
          })
          
        }
        return (
            <div className="row " style={{width:"100%"}}>
                <div id="carouselExampleSlidesOnly" className="carousel slide " data-ride="carousel">
                    <div className="col">
                        <div className="carousel-inner">
                            {card}
                        </div>
                    </div>
                        
                </div>       
             </div>


            
        )
    }
}

export default CarouselG;
