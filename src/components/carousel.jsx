import React from 'react';
import {getImageFromApi} from '../api/Api'
import '../asset/Carousel.scss'
import  DEFAULT from '../asset/image/default.jpg'
import titre from './titre'
class Header extends React.Component{

    render(){
      const {titre, data1, data2, data3, data4, data5} = this.props
      console.log(data1);
        let card1; 
        if(!(data1==undefined)){
          card1 = data1.map((item)=>{
            if(item==data1[0]){
              return  <div class="carousel-item active">
              <a href={"/Detail/"+ item.id}><img src={item.poster_path ? getImageFromApi(item.poster_path) : 'https://vignette.wikia.nocookie.net/asher-altens/images/3/3b/112815953-stock-vector-no-image-available-icon-flat-vector.jpg/revision/latest?cb=20200517192640'} class="d-block w-100" alt="..."/></a>
            
          </div>
            } else{
               return <div class="carousel-item">
               <a href={"/Detail/"+ item.id}><img src={item.poster_path ? getImageFromApi(item.poster_path) : 'https://vignette.wikia.nocookie.net/asher-altens/images/3/3b/112815953-stock-vector-no-image-available-icon-flat-vector.jpg/revision/latest?cb=20200517192640'} class="d-block w-100" alt="..."/></a>
             
           </div>
            }
          })
          
        }


        let card2;
        if(!(data2==undefined)){
          card2 = data2.map((item)=>{
            if(item==data2[0]){
              return  <div class="carousel-item active">
              <a href={"/Detail/"+ item.id}><img src={item.poster_path ? getImageFromApi(item.poster_path) : 'https://vignette.wikia.nocookie.net/asher-altens/images/3/3b/112815953-stock-vector-no-image-available-icon-flat-vector.jpg/revision/latest?cb=20200517192640'} class="d-block w-100" alt="..."/></a>
            
          </div>
            } else{
               return <div class="carousel-item">
               <a href={"/Detail/"+ item.id}><img src={item.poster_path ? getImageFromApi(item.poster_path) : 'https://vignette.wikia.nocookie.net/asher-altens/images/3/3b/112815953-stock-vector-no-image-available-icon-flat-vector.jpg/revision/latest?cb=20200517192640'} class="d-block w-100" alt="..."/></a>
             
           </div>
            }
            
          })
          
        }


        let card3;
        if(!(data3==undefined)){
          card3 = data3.map((item)=>{
            if(item==data3[0]){
              return  <div class="carousel-item active">
              <a href={"/Detail/"+ item.id}><img src={item.poster_path ? getImageFromApi(item.poster_path) : 'https://vignette.wikia.nocookie.net/asher-altens/images/3/3b/112815953-stock-vector-no-image-available-icon-flat-vector.jpg/revision/latest?cb=20200517192640'} class="d-block w-100" alt="..."/></a>
            
          </div>
            } else{
               return <div class="carousel-item">
               <a href={"/Detail/"+ item.id}><img src={item.poster_path ? getImageFromApi(item.poster_path) : 'https://vignette.wikia.nocookie.net/asher-altens/images/3/3b/112815953-stock-vector-no-image-available-icon-flat-vector.jpg/revision/latest?cb=20200517192640'} class="d-block w-100" alt="..."/></a>
             
           </div>
            }
            
          })
          
        }

          let card4;
        if(!(data4==undefined)){
          card4 = data4.map((item)=>{
            if(item==data4[0]){
              return  <div class="carousel-item active">
              <a href={"/Detail/"+ item.id}><img src={item.poster_path ? getImageFromApi(item.poster_path) : 'https://vignette.wikia.nocookie.net/asher-altens/images/3/3b/112815953-stock-vector-no-image-available-icon-flat-vector.jpg/revision/latest?cb=20200517192640'} class="d-block w-100" alt="..."/></a>
            
          </div>
            } else{
               return <div class="carousel-item">
               <a href={"/Detail/"+ item.id}><img src={item.poster_path ? getImageFromApi(item.poster_path) : 'https://vignette.wikia.nocookie.net/asher-altens/images/3/3b/112815953-stock-vector-no-image-available-icon-flat-vector.jpg/revision/latest?cb=20200517192640'} class="d-block w-100" alt="..."/></a>
             
           </div>
            }
            
          })
          
        }

        console.log(card1);
        
      
      
        return (
          <div className="mb-5 mt-5">

            
            <div className="titre">
              <h4>{titre}</h4>
            </div>
            
<div className="Carousel">
                <div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    {card1}
  </div>
</div>
                </div>
                <div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    {card2}
  </div>
</div>
                </div>
                <div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
  {card3}
  </div>
</div>
                </div>
                <div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
  {card4}
  </div>
</div>
                </div>
                
                
            </div>
            
          </div>


            
        )
    }
}

export default Header;
