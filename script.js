// api url
const api_url ="https://api.themoviedb.org/3/search/movie?api_key=0f8c5cd40e76340bfd29fc59b6a3e5a8&query=";

const imgPATH = "https://image.tmdb.org/t/p/w1280";

let moviesDiv = document.querySelector("#movies");
let form = document.querySelector("#form");
let input = document.querySelector("#search");

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    if (res) {
        console.log('Super');
    }
    displayMovies(data);
}

function displayMovies(movies){
    moviesDiv.innerHTML="";
    console.log(typeof movies);
    Array.from(movies.results).forEach(movie => {
        console.log('Début foreach');
        const div=document.createElement("div");
        div.classList.add("movie");
        div.innerHTML=`
            <img src="${imgPATH + movie.poster_path}" alt=""/>
            <div class="details">
                <h2 class="title"> ${movie.title} </h2>
                <p class="rate">Rating : <span class="rating">${
                    movie.vote_average
                }</span></p>
                <p class="overview">
                ${movie.overview}
                </p>
            </div>
        `;
        moviesDiv.appendChild(div);
        console.log('Fin foreach');
    });
}

console.log(form);
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    moviesDiv.innerHTML="";
    const InputVal = input.value;
    console.log(InputVal);
    if(InputVal){
        getMovies(api_url+InputVal);
        input.value="";
    }
})


