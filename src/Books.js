import React from 'react';
import { getBooks, deleteBook, addBook } from './store/actions';
import { connect } from 'react-redux';
const Books = (props) => {
  const [newBook, setNewBook] = React.useState({});
  const [allBooks, setAllBooks] = React.useState([]);

  React.useEffect(() => {
    props.dispatch(getBooks());
  }, []);
  React.useEffect(() => {
    if (props.books) {
      setAllBooks([...props.books]);
    }
  }, [props.books]);

  return (
    <div>
      <h1>Thunk API Calls in Redux!</h1>
      <input
        type="text"
        placeholder="Enter Title"
        onChange={(e) => {
          setNewBook({ ...newBook, title: e.target.value });
        }}
      />
      <br /><br/>
      <input
        type="text"
        placeholder=" Enter Author"
        onChange={(e) => {
          setNewBook({ ...newBook, author: e.target.value });
        }}
      />
      <br /><br/>
      <button
        onClick={() => {
          props.dispatch(addBook(newBook));
        }}
      >
        Add Post
      </button>
      <hr/>
      <table border="2">
        <tbody>
          {allBooks &&
            allBooks.map((p, i) => {
              return (
                <tr key={i}>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>{p.author}</td>
                  <td>
                    <button
                      onClick={() => {
                       props.dispatch(deleteBook(p.id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default connect(store=>store)(Books);
