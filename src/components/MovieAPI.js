import React, { Component } from 'react'

 class MovieAPI extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        posts: []
     }
   }
   

   fetchPosts = async (e) =>{
    try{
      const inputValue = e.target.value
      let Api = `http://www.omdbapi.com/?apikey=ee2bebbc&s=${inputValue}`;
      const response  = await fetch(Api);
      const data = await response.json();
      console.log(data);

      this.setState({
        posts: data
      })
    } catch (error) {
      console.log(error)
    }
  }



  render() {
    const { posts } = this.state;

    return (
      <div>

        <div className="container">
            <input onChange={this.fetchPosts} type="text" placeholder="Enter titel name"/>
           
        </div>


        <section>

{
   posts.Search ?
    posts.Search.map( movie => (
      <article key={ movie.imdbID }>
        <h2>{ movie.Title }</h2>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p>
        <p></p>
        <img src={movie.Poster} alt=""/>

      </article>
    ))
: "no data"
}
</section>


      </div>
    )
  }
}

export default MovieAPI;
