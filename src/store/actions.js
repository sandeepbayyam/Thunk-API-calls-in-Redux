export const getBooks = () => {
  return (dispatch) => {
    fetch('http://localhost:4000/posts')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: 'UPDATE_BOOKS', payload: data });
      });
  };
};
export const deleteBook = (id) => {
  return (dispatch) => {
    fetch('http://localhost:4000/posts/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:',data);
        dispatch(getBooks());
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
};
export const addBook = (newBook) => {
  return (dispatch)=>{
    fetch('http://localhost:4000/posts', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        dispatch(getBooks());
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
};