import React from 'react';
import '../asset/Header.scss'
import logo from "../asset/image/logo.png"

class Header extends React.Component{

    state={
        SearchText:""
    }

    changementRecherche = e =>{
        console.log(e.target.value);
        this.setState({
            SearchText:e.target.value
        })
        
    }

    render(){
        const {recherche} = this.props;
        return (
            <header className="header">
                <img src={logo} alt=""/>

              <div className="menu_search">
                  <div className='search'>
                  <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
  
  <input class="form-control form-control-sm ml-3 w-75 search-input"  type="text" placeholder="Search"
    aria-label="Search" onChange={this.changementRecherche} />
    <i class="fas fa-search" aria-hidden="true" onClick={recherche(this.state.SearchText)}></i>
</form>
                  </div>
                      <ul className="menu">
                          <li><a href="Films">Films</a></li>
                          <li><a href="News">News</a></li>
                          <li><a href="Séries">Séries</a></li>
                          <li><a href="My account">My account</a></li>
                      </ul>
              </div>
            </header>
        )
    }
}

export default Header;
