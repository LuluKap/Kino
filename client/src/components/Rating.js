import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 
class App extends React.Component {
  render() {
    const { rating } = this.state;
 
    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
          name="rate2" 
          editing={false}
          renderStarIcon={() => <span></span>}
          starCount={10}
          value={8}
        />
      </div>
    );
  }
}
 
ReactDOM.render(
  <App />, 
  document.getElementById('app')
);