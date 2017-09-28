import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {

let bg = {
color:"teal",
fontFamily:"Raleway"
}

let title = {
  textAlign:"center"
}

        return (
            <div style={bg} className="row">
                <h1 style={title}>Books N' Roses: Appetite for Instruction</h1>
                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}

export default App;
