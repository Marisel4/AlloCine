import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Header from './components/header'
import Carousel from './components/carousel'
import Footer from './components/Footer'
import GrosCarousel from './components/GrosCaroussel'
import {getFilmsFromApiWithSearchedText, getTopFilms} from './api/Api'
import DetailFilm from './components/detailFilm'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Vue1 from './components/vieu1'
import titre from './components/titre'
import Pub from './components/pub'

class App extends React.Component{

  constructor(props) {
    super(props)
    this.searchedByText = "guerre"
    this.page=1
    // this.Topfilms=[]
    this.state={
      Topfilms:[1, 2, 3, 4, 5],
      films1:[],
      films2:[],
      films3:[],
      films4:[],
      films5:[],
      films6:[],
      films7:[],
      films8:[],
      films9:[],
      films210:[],
  
    }
    // Ici on va créer les propriétés de notre component custom Search
  }
  

  componentDidMount(){
    getTopFilms().then(data => {
      this.setState({
        Topfilms:data.results
      })
      console.log("je suis " +  this.Topfilms);
  })

    getFilmsFromApiWithSearchedText("love", this.page).then(data => {
      this.setState({ films1: data.results })
      console.log(data.results);
  })

  getFilmsFromApiWithSearchedText("dead", this.page).then(data => {
    this.setState({ films2: data.results })
    console.log(data.results);
})

getFilmsFromApiWithSearchedText("zombie", this.page).then(data => {
  this.setState({ films3: data.results })
  console.log(data.results);
})

getFilmsFromApiWithSearchedText("guerre",this.page).then(data => {
  this.setState({ films4: data.results })
  console.log(data.results);
})

getFilmsFromApiWithSearchedText("2020", ).then(data => {
  this.setState({ films5: data.results })
  console.log(data.results);
})

getFilmsFromApiWithSearchedText("2020", 6).then(data => {
  this.setState({ films6: data.results })
  console.log(data.results);
})

getFilmsFromApiWithSearchedText("2020", 7).then(data => {
  this.setState({ films7: data.results })
  console.log(data.results);
})

getFilmsFromApiWithSearchedText("2020", 8).then(data => {
  this.setState({ films8: data.results })
  console.log(data.results);
})

getFilmsFromApiWithSearchedText("serie", 9).then(data => {
  this.setState({ films9: data.results })
  console.log(data.results);
})

getFilmsFromApiWithSearchedText("serie", 10).then(data => {
  this.setState({ films10: data.results })
  console.log(data.results);
})
getFilmsFromApiWithSearchedText("serie", 11).then(data => {
  this.setState({ films11: data.results })
  console.log(data.results);
})

getFilmsFromApiWithSearchedText("serie", 12).then(data => {
  this.setState({ films12: data.results })
  console.log(data.results);
})

  }


  _searchTextInputChanged = input =>( e )=> {
    console.log(input);
    this.searchedByText=input;

    getFilmsFromApiWithSearchedText(this.searchedByText, "1").then(data => {
      this.setState({ films1: data.results })
      console.log(data.results);
  })

  getFilmsFromApiWithSearchedText(this.searchedByText, "2").then(data => {
    this.setState({ films2: data.results })
    console.log(data.results);
})

getFilmsFromApiWithSearchedText(this.searchedByText, "3").then(data => {
  this.setState({ films3: data.results })
  console.log(data.results);
})

getFilmsFromApiWithSearchedText(this.searchedByText, "4").then(data => {
  this.setState({ films4: data.results })
  console.log(data.results);
})
    
  }

  previous=(e)=>{
    console.log("hi");
    this.page=this.page-1


    getFilmsFromApiWithSearchedText("love", this.page).then(data => {
      this.setState({ films1: data.results })
      console.log(data.results);
  })

  getFilmsFromApiWithSearchedText("dead", this.page).then(data => {
    this.setState({ films2: data.results })
    console.log(data.results);
})

getFilmsFromApiWithSearchedText("zombie", this.page).then(data => {
  this.setState({ films3: data.results })
  console.log(data.results);
})

getFilmsFromApiWithSearchedText("guerre",this.page).then(data => {
  this.setState({ films4: data.results })
  console.log(data.results);
})
  }

  next=(e)=>{
    console.log("hi");
    this.page=this.page+1


    getFilmsFromApiWithSearchedText("love", this.page).then(data => {
      this.setState({ films1: data.results })
      console.log(data.results);
  })

  getFilmsFromApiWithSearchedText("dead", this.page).then(data => {
    this.setState({ films2: data.results })
    console.log(data.results);
})

getFilmsFromApiWithSearchedText("zombie", this.page).then(data => {
  this.setState({ films3: data.results })
  console.log(data.results);
})

getFilmsFromApiWithSearchedText("guerre",this.page).then(data => {
  this.setState({ films4: data.results })
  console.log(data.results);
})
  }


  render(){
    let tab =[1, 2, 3, 4]
    return (
<BrowserRouter>
            <Header recherche={this._searchTextInputChanged} />
            
            <Switch>
                <Route exact path="/" component={()=> <Vue1 top={this.state.Topfilms}  data1={this.state.films1} data2 ={this.state.films2} data3 ={this.state.films3} data4 ={this.state.films4} data5 ={this.state.films5} data6 ={this.state.films6} data7 ={this.state.films7} data8 ={this.state.films8}  data9={this.state.films9} data10 ={this.state.films10} data11 ={this.state.films11} data12 ={this.state.films12} next={this.next}  previous={this.previous} />}  />
                <Route path="/Detail/:id" component={DetailFilm} />
            </Switch>
            <Footer />
    </BrowserRouter>

    );
  }
}

export default App;
