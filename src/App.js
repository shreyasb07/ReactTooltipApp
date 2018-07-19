import React, { Component } from 'react';
import { Twemoji } from 'react-emoji-render';
import './App.css';
import GiphyList from './Route.js';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      place: 'top',
      type: 'dark',
      effect: 'float',
      condition: false
    }
  }

  render() {
    return (
      <div>
        <div className = 'container'>
          <section className='tooltip-example'>
            <h4 className='title'>GiphyTooltip demo</h4>
          </section>
          <span className = "tooltip" title="This is my span's tooltip message!">Just select text and get GIFs!</span>
          <p><Twemoji text = "Cats :smiley_cat: , dogs :dog: and unicorns 🦄 !" /></p>
          <span className ="tooltip" title="This is my span's tooltip message!">Some text</span>
        </div>
        <GiphyList />
      </div>
    );
  }



}

export default App;
