import React, { useState } from "react";
import ListBook from "./ListBook";
import AddBook from "./AddBook";
import "./Header.css";

const Header = () => {
  const [bookState, setBookState] = useState({
    title: "",
    author: "",
    price: "",
  });
  const [listBook, setListBook] = useState([]);
  const [editIndex, setEditIndex] = useState('');
  const [upDated,setUpDated] = useState (true)
 


  const [list_btn, setList_btn] = useState(true);
  const [addBook, setAddBook] = useState(false);

  const handlelist = () => {
    setList_btn(true);
    setAddBook(false);
  };
  const handleadd = () => {
    setList_btn(false);
    setAddBook(true);
  };

 

  return (
    <div>
      <h1>Book Management</h1>
      <div className="btn_add">
        <span>
          {list_btn && !addBook ? (
            <span className="btn_click">List Book</span>
          ) : (
            <span onClick={handlelist} className="btn_list">
              List Book
            </span>
          )}
        </span>
        <span>
          {!list_btn && addBook ? (
            <span className="btn_click">Add Book</span>
          ) : (
            <span onClick={handleadd} className="btn_list">
              Add Book
            </span>
          )}
        </span>
      </div>

      <div className="list">
        {list_btn && (
          <ListBook
            listBook={listBook}
            setListBook={setListBook}
            setEditIndex={setEditIndex}
            setBookState={setBookState}
            setAddBook={setAddBook}
            setList_btn={setList_btn}
            bookState={bookState}
            editIndex={editIndex}
          />
        )}
        
      </div>
      {addBook && (
        <AddBook
          listBook={listBook}
          setListBook={setListBook}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          bookState={bookState}
          setBookState={setBookState}
          upDated={upDated}
          setUpDated={setUpDated}
        
        />
      )}
      
    </div>
  );
};

export default Header;
