import React from 'react';
import '../asset/GrosCarousel.scss'
import {getImageFromApi} from '../api/Api'
class GrosCarousel extends React.Component{

    render(){
        const {top} = this.props;
        
        let card;
        let data =[1,2,2,4]
        if(!(top==undefined)){
          card = top.map((item)=>{
              if(item == top[0]){
              return  <div class="carousel-item active " style={{width:"100%"}}>
            <div><img src={getImageFromApi(item.backdrop_path)} class="d-block w-100" alt="..." /></div>
            </div>
            } else{
               return <div class="carousel-item" style={{width:"100%"}}>
            <a href={'/Detail/'+ item.id} ><img src={getImageFromApi(item.backdrop_path)} class="d-block w-100" alt="..." /></a>
            </div>
            }
            
          })
          
        }
        return (
            <div className="Gros">
                <div id="carouselExampleSlidesOnly" className=" row carousel slide mb-5" data-ride="carousel">
                    <div class="col">
                        <div class="carousel-inner">
                            {card}
                        </div>
                        <div className="gros-titre">
                            <p>Y A DU SOLEIL ET DU CINÉMA</p>
                            <p>Notre sélection spéciale</p>
                        </div> 
                    </div>
                        
                </div>       
             </div>


            
        )
    }
}

export default GrosCarousel;
