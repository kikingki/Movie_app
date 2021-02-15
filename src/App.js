import React from "react";
import axios from "axios";

import "./styles/App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Movie from "./components/Movie";


// 클래스형 컴포넌트
class App extends React.Component {
  // 로딩유무, 영화목록
  state = {isLoaded:false, movies:[]};

  setMovie = async () => {
    // // name => asd 
    // // object의 key 값을 중괄호에 묶어 선언하면 자동으로 object의 value 값이 할당된다.
    // const obj = {name: "asd", age: "12"};
    // const {name} = obj;
    // console.log(name);

    // data 안의 data 안의 movies 객체만 사용할 것이므로
    const {data: {data: {movies}}} = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
      );

      this.setState({isLoaded: true, movies: movies});
  };

  // render 다음에 componentDidMount 호출
  componentDidMount () {
    this.setMovie();
  }

  render() {
    const {isLoaded, movies} = this.state;
    return (
      <div>
        {/* 삼항연산자로 isLoaded의 상태가 false일 때 Loding만 보여줌 */}
        {isLoaded ? (
          <>
            <Nav/>

            {movies.map(movie => (
              <Movie 
                key = {movie.id}
                title={movie.title} 
                poster={movie.medium_cover_image}
                summary = {movie.summary}
              />
            ))}

            <Footer/>
          </>
        ) : (
        <Loading />
        )}

      </div>
    );
}
}

export default App;