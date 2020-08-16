import React from 'react';
import '../asset/CarteDeFilm.scss'



class Header extends React.Component{


    

    render(){

        const {films} = this.props
        console.log(films);
        
        return (
            <div className="card_parent">
                <div class="first" >
                    <a href="#">
                    <img src="https://fr.web.img5.acsta.net/pictures/15/08/21/15/22/016306.jpg" class="card-img-top" alt="..." style={{height:"100px"}} />
                    </a>
                    <p class="card-text"><small class="text-muted">Titre</small></p>
                    <p ><i class="fa fa-heart" aria-hidden="true"></i></p>
                </div>
                <div class="" >
                    <a href="#">
                    <img src="https://fr.web.img5.acsta.net/pictures/15/08/21/15/22/016306.jpg" class="card-img-top" alt="..." style={{height:"100px"}} />
                    </a>
                    <p class="card-text"><small class="text-muted">Titre</small></p>
                    <p ><i class="fa fa-heart" aria-hidden="true"></i></p>
                </div>
                <div class="" >
                    <a href="#">
                    <img src="https://fr.web.img5.acsta.net/pictures/15/08/21/15/22/016306.jpg" class="card-img-top" alt="..." style={{height:"100px"}} />
                    </a>
                    <p class="card-text"><small class="text-muted">Titre</small></p>
                    <p ><i class="fa fa-heart" aria-hidden="true"></i></p>
                </div>
                <div class="" >
                    <a href="#">
                    <img src="https://fr.web.img5.acsta.net/pictures/15/08/21/15/22/016306.jpg" class="card-img-top" alt="..." style={{height:"100px"}} />
                    </a>
                    <p class="card-text"><small class="text-muted">Titre</small></p>
                    <p ><i class="fa fa-heart" aria-hidden="true"></i></p>
                </div>
                <div class="" >
                    <a href="#">
                    <img src="https://fr.web.img5.acsta.net/pictures/15/08/21/15/22/016306.jpg" class="card-img-top" alt="..." style={{height:"200px"}} />
                    </a>
                    <p class="card-text"><small class="text-muted">Titre</small></p>
                    <p ><i class="fa fa-heart" aria-hidden="true"></i></p>
                </div>
                <div class="" >
                    <a href="#">
                    <img src="https://fr.web.img5.acsta.net/pictures/15/08/21/15/22/016306.jpg" class="card-img-top" alt="..." style={{height:"100px"}} />
                    </a>
                    <p class="card-text"><small class="text-muted">Titre</small></p>
                    <p ><i class="fa fa-heart" aria-hidden="true"></i></p>
                </div>
                <div class="" >
                    <a href="#">
                    <img src="https://fr.web.img5.acsta.net/pictures/15/08/21/15/22/016306.jpg" class="card-img-top" alt="..." style={{height:"100px"}} />
                    </a>
                    <p class="card-text"><small class="text-muted">Titre</small></p>
                    <p ><i class="fa fa-heart" aria-hidden="true"></i></p>
                </div>
                <div class="" >
                    <a href="#">
                    <img src="https://fr.web.img5.acsta.net/pictures/15/08/21/15/22/016306.jpg" class="card-img-top" alt="..." style={{height:"100px"}} />
                    </a>
                    <p class="card-text"><small class="text-muted">Titre</small></p>
                    <p ><i class="fa fa-heart" aria-hidden="true"></i></p>
                </div>
            </div>
        )
    }
}

export default Header;
