import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';



class BookList extends Component {
  render() {

let koob = {
  textAlign:"center",
  fontSize:20
}
    //must create a map function here to return the following:

let books = this.props.books;
let ListOBooks = books.map((book) => {

  let indi = {
    padding:10
  }

return (
  <div style={indi}
    key={book.id}
    onClick={() => this.props.selectBook(book)}
    className="list-group-item">{book.title}</div>
  )
});

    return (
      <ul style={koob} className="list-group col-sm-4">
        {ListOBooks}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapstate", state.books);
  //what is returned will show up as props inside of BookList
  //this gives you access to books in props.. (books would be good for mapping)
  return {
    books: state.books,
  };
}

//anything returned from this function will end up as props on
//BookList Container.
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result should be passed to
  //all of the reducers. (flows through dispatch function -- like a funnel)
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//connect all functions to container component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
