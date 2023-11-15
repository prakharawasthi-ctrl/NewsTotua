import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from './components/Spinner';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Spinner /> */}
        <News pageSize={6} />
      </div >
    )
  }
}
