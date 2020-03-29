import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response)
      })
  }
  render() {
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <p>lorem lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus vel consequatur nostrum quam aperiam labore praesentium officiis iusto! Hic veritatis nobis at molestias obcaecati ullam asperiores nihil sunt fugit quis. </p>
      </div>
    )
  }
}

export default Home;