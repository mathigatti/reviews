import React from 'react';
import logo from './logo.svg';
import './App.css';
import reviews from './data/reviews.json';
import no_image from './data/no-image.jpg';
import 'bootstrap/dist/css/bootstrap.css';

function getImage(image){
  if (image.includes("filestackcontent")){
    return image
  } else {
    return no_image 
  }
}

function App() {
  var options = { year: 'numeric', month: 'long'};

  return (
        <div class="card-columns" align="center">


            {reviews.map((review, index)=>{
              return (

              <div class="card" >
                <img class="card-img-top" src={getImage(review.writer.avatar_url)} alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title">{review.writer.name}</h5>
                  <p class="card-text">{review.content}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">{new Date(review.created_at*1000).toLocaleDateString("en-US",options)}</small>
                </div>
              </div>

              )
            })}
        </div>

  );
}

export default App;






