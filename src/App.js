import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import apiKey from './apiKey.js';
import MovieCard from './components/MovieCard.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//const starWars = { id: 1, title: 'Star Wars' };
//const movies = [
const originalMovies = [
  { id: 1, title: 'Star Wars' },
  { id: 2, title: 'Star Trek' },
  { id: 3, title: 'Space Jam' }
];
const styles = {
  root: {
    flexGrow: 1,
  },
};

class App extends Component {
/*
 * 
 *MANAGING STATE OF COMPONENT 
 * 
 */
  state = { movies: [] };

  //componentDidMount() {
  async componentDidMount() {

    /*
    setTimeout(
      () => 
        this.setState({movies: originalMovies}), 5000
    );
    */

    //const response = await fetch("'https://api.themoviedb.org/3/movie/550?api_key=${" + apiKey + "}')";
    //const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}');   
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=65fd025717f04a84773e9e1f55d0ec48');   
    const json = await response.json();
    console.log(json);
    this.setState({ movies:json.results });
  }

  /*
  *
  *JSX 
  * 
  */
  render() {
    const { movies } = this.state;
    //const { classes } = props;
    
    return (
    
    <div>
      {/*<AppBar position="static" color="default">*/}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Top Movies
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="App">
        {/*{originalMovies.map(*/}
        {movies.map(
          movie => <MovieCard key={movie.id} movie={movie} /> 
          //arrayvariablename.map (parameter => component name with props)
        )}
      </div>
    </div>
    );
  }
}

export default withStyles(styles)(App);
