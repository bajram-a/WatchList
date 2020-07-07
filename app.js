/// movie class/representation of a movie
class Movie{
    constructor(content , time){
        this.content=content;
        this.time=time;
    }
}

// UI tasks
class UI{                                                                 
    static displayMovies(){
        const StoredMovies=[
            {
            content:'Here  is the content displayed',
            time: 'And here, the prefered time and date of streaming ',
            },
        ];
const movies= StoredMovies

movies.forEach((movie)=> UI.addMovieToList(movie));
    }
 static addMovieToList(movie)   {
     const list= document.querySelector('#movies-list');
     const row=document.createElement('tr');
     row.innerHTML= `
     <td>${movie.content}</td>
     <td>${movie.time}</td>
     <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
`;

list.appendChild(row);
    }
static deleteMovie(el){
    if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
    }

}
static showAlert(message,className){
    const div = document.createElement('div');
    div.className= `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container= document.querySelector('.container');
    const form= document.querySelector('#movie-form');
    container.insertBefore(div,form);
    setTimeout(()=> document.querySelector('.alert').remove(),3000);
}


    static clearFields(){
        document.querySelector('#cont').value='';
        document.querySelector('#direct').value='';

    }
}

//display movies
document.addEventListener('DOMContentLoaded', UI.displayMovies);
//add a movie
document.querySelector('#movie-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
    
    const content=document.querySelector('#cont').value;
    const time=document.querySelector('#direct').value;

//validate
if(content === ''|| time === ''){
    UI.showAlert('please fill in all fields', 'danger');
}else{  //init movie
    const movie= new Movie(content,time);
    console.log(movie)
   
   //// movie to ui
   UI.addMovieToList(movie);
   UI.showAlert('Content Successfully Added', 'success');
   
   UI.clearFields();
}
});
//remove a movie
document.querySelector('#movies-list').addEventListener('click', (e) => {
    // Remove movies from UI
    UI.deleteMovie(e.target);
    UI.showAlert('Content Removed', 'success');

});