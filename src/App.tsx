import React from 'react';

function App() {
  return (
    <div className="App">
      <h1 className="text-amber-800 text-xl font-bold">Bookstore</h1>
      <form action="submit" className="flex flex-col">
        <label htmlFor="">Title</label>
        <input type="text" placeholder="Book title" />
        <label htmlFor="">Author</label>
        <input type="text" placeholder="Author name" />
        <label htmlFor="">Note</label>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Leave notes"
        ></textarea>
      </form>
    </div>
  );
}

export default App;
