import React from 'react';
import logo from './logo.svg';
import './App.css';
import reviews from './reviews.json';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
        <div class="container-fluid">
          <div class="col col-sm-6" id="reviews">

            {reviews.map((review, index)=>{
              return (

                <div class="card">
                  <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src={review.writer.avatar_url} alt="First slide"></img>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">{review.writer.name}</h5>
                    <p class="card-text">{review.content}</p>
                  </div>
                </div>

              )
            })}

          </div>
        </div>

  );
}

export default App;
