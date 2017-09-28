import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
import { bindActionCreators } from 'redux';


class BookDetail extends Component {

  render() {

let details = {
  textAlign:"center",
  margin:20
}

let title = {
  fontSize:25
}

let bn = {
  fontSize:30
}

    if(!this.props.book) {

let bd = {
  textAlign:"center"
}

      return (
        <div style={bd}>Select a book to get started!</div>
      )
    }
    return (
      <div style={details} className="col-md-4">
        <h3 style={title}> Details for: </h3>
        <h4 className="title" style={bn}>{this.props.book.title}</h4>

        <div>{this.props.book.pages} pages</div>
        <div>Author: {this.props.book.author}</div>
        <div>Price: ${this.props.book.price} USD</div>
        <div>Published: {this.props.book.published_date} by {this.props.book.publisher}</div>
        <div>Genre: {this.props.book.category.join(", ")} </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}


export default connect(mapStateToProps)(BookDetail);
