
const api="api_key=7b13451e6e5222473190aabe22d5a8f9";
const base_url="https://api.themoviedb.org/3";

const banner_url="https://image.tmdb.org/t/p/original";
const img_url="https://image.tmdb.org/t/p/original";

const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

function truncate(str,n){
   return str?.length>n?str.substr(0,n-1)+"...":str;

}

fetch(requests.fetchNetflixOrignals)
   .then((res)=>res.json())
   .then((data)=>{
    
   

   const setMovie=
   data.results[Math.floor(Math.random()*data.results.length-1)];
   var banner=document.getElementById("banner");
   var banner_title=document.getElementById("banner_title");
   var banner_desc=document.getElementById("banner_description");

   banner.style.backgroundImage=
   "url("+banner_url+setMovie.backdrop_path+")";
   banner_desc.innerText=truncate(setMovie.overview,150);
   banner_title.innerText=setMovie.name;
   });
   //ORIGNAL
   fetch(requests.fetchNetflixOrignals)
    .then((res)=>res.json())

    .then((data)=>{
       const headrow=document.getElementById("headrow");
       const row=document.createElement("div");

       row.className="row";
       row.classList.add("netflixrow");

       headrow.appendChild(row);
       const title=document.createElement("h2");
       title.className="row_title";
       title.innerText="NETFLIX ORIGNALS";

       row.appendChild(title);

       const row_posters=document.createElement("div");
       row_posters.className="row_posters";
       row.appendChild(row_posters);

       data.results.forEach((movie) => {
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        
        var s=movie.name.replace(/\s+/g,"");
        poster.id=s;
        poster.src=img_url+movie.poster_path;
        row_posters.appendChild(poster);
        
       });
    });
    //TRENDING
    fetch(requests.fetchTrending)
    .then((res)=>res.json())

    .then((data)=>{
       const headrow=document.getElementById("headrow");
       const row=document.createElement("div");

       row.className="row";

       headrow.appendChild(row);
       const title=document.createElement("h2");
       title.className="row_title";
       title.innerText="TOP RATED";

       row.appendChild(title);

       const row_posters=document.createElement("div");
       row_posters.className="row_posters";
       row.appendChild(row_posters);

       data.results.forEach((movie) => {
        const poster=document.createElement("img");
        poster.className="row_posterLarge";
        
        var s2=movie.id;
        poster.id=s2;
        poster.src=img_url+movie.poster_path;
        row_posters.appendChild(poster);
        
       });
    });

        //Action
        fetch(requests.fetchActionMovies)
        .then((res)=>res.json())
    
        .then((data)=>{
           const headrow=document.getElementById("headrow");
           const row=document.createElement("div");
    
           row.className="row";
    
           headrow.appendChild(row);
           const title=document.createElement("h2");
           title.className="row_title";
           title.innerText="ACTION MOVIES";
    
           row.appendChild(title);
    
           const row_posters=document.createElement("div");
           row_posters.className="row_posters";
           row.appendChild(row_posters);
    
           data.results.forEach((movie) => {
            const poster=document.createElement("img");
            poster.className="row_poster";
            
            var s2=movie.id;
            poster.id=s2;
            poster.src=img_url+movie.backdrop_path;
            row_posters.appendChild(poster);
            
           });
        });
   
   //Comedy
    fetch(requests.fetchComedyMovies)
    .then((res)=>res.json())

    .then((data)=>{
       const headrow=document.getElementById("headrow");
       const row=document.createElement("div");

       row.className="row";

       headrow.appendChild(row);
       const title=document.createElement("h2");
       title.className="row_title";
       title.innerText="COMEDY MOVIES";

       row.appendChild(title);

       const row_posters=document.createElement("div");
       row_posters.className="row_posters";
       row.appendChild(row_posters);

       data.results.forEach((movie) => {
        const poster=document.createElement("img");
        poster.className="row_poster";
        
        var s2=movie.id;
        poster.id=s2;
        poster.src=img_url+movie.backdrop_path;
        row_posters.appendChild(poster);
        
       });
    }); 

    //Romance
    fetch(requests.fetchRomanceMovies)
    .then((res)=>res.json())

    .then((data)=>{
       const headrow=document.getElementById("headrow");
       const row=document.createElement("div");

       row.className="row";

       headrow.appendChild(row);
       const title=document.createElement("h2");
       title.className="row_title";
       title.innerText="ROMANCE";

       row.appendChild(title);

       const row_posters=document.createElement("div");
       row_posters.className="row_posters";
       row.appendChild(row_posters);

       data.results.forEach((movie) => {
        const poster=document.createElement("img");
        poster.className="row_poster";
        
        var s2=movie.id;
        poster.id=s2;
        poster.src=img_url+movie.backdrop_path;
        row_posters.appendChild(poster);
        
       });
    });

    //HORROR
    fetch(requests.fetchHorrorMovies)
    .then((res)=>res.json())

    .then((data)=>{
       const headrow=document.getElementById("headrow");
       const row=document.createElement("div");

       row.className="row";

       headrow.appendChild(row);
       const title=document.createElement("h2");
       title.className="row_title";
       title.innerText="HORROR MOVIES";

       row.appendChild(title);

       const row_posters=document.createElement("div");
       row_posters.className="row_posters";
       row.appendChild(row_posters);

       data.results.forEach((movie) => {
        const poster=document.createElement("img");
        poster.className="row_poster";
        
        var s2=movie.id;
        poster.id=s2;
        poster.src=img_url+movie.backdrop_path;
        row_posters.appendChild(poster);
        
       });
    });

    //Documentary
    fetch(requests.fetchDocumentaries)
    .then((res)=>res.json())

    .then((data)=>{
       const headrow=document.getElementById("headrow");
       const row=document.createElement("div");

       row.className="row";

       headrow.appendChild(row);
       const title=document.createElement("h2");
       title.className="row_title";
       title.innerText="DOCUMANTRIES";

       row.appendChild(title);

       const row_posters=document.createElement("div");
       row_posters.className="row_posters";
       row.appendChild(row_posters);

       data.results.forEach((movie) => {
        const poster=document.createElement("img");
        poster.className="row_poster";
        
        var s2=movie.id;
        poster.id=s2;
        poster.src=img_url+movie.backdrop_path;
        row_posters.appendChild(poster);
        
       });
    });

    window.addEventListener("scroll",function(){
       var nav=this.document.querySelector(".header");
       nav.classList.toggle("active",window.scrollY>0);
    })