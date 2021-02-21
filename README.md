# 영화 정보 페이지

### - 완성 페이지
![완성](https://user-images.githubusercontent.com/63100425/108623097-72777780-7480-11eb-8061-1c4577f96456.gif)

+ 스크롤 시 navbar를 고정하고, 불투명도 조절
```javascript
    changeNav = () => {
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('.nav');
            const windowPosition = window.scrollY>0;
            
            nav.classList.toggle('scroll-opacity', windowPosition);
        }
        )
    }
```
```css
.nav.scroll-opacity{
    opacity: 0.3;
}
```

+ 영화 목록을 2개씩 띄우기 위해 div로 묶어줌.
```javascript
            <div className="movies">
              {movies.map(movie => (
                <Movie 
                  key = {movie.id}
                  title={movie.title} 
                  poster={movie.medium_cover_image}
                  summary = {movie.summary}
                  year = {movie.year}
                />
              ))}
            </div>
```
```css
.movies {
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}
```
+ 

### - 모바일 반응형
![모바일](https://user-images.githubusercontent.com/63100425/108623100-73a8a480-7480-11eb-9694-60b830202d39.gif)

+ nav + header font size, header image size 변경
+ 영화 목록을 1개씩 띄우고, ```flex-direction: column``` 변경