import React, { useState, useEffect } from "react";
import Delete from "./Delete";
import "./ListBook.css";
import axios from "axios";
 

const ListBook = ({
  listBook,
  setListBook,
  setEditIndex,
  setBookState,
  setAddBook,
  setList_btn,
  bookState,
  editIndex
}) => {
  const [deletebtn, setDeletebtn] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:555/books")
      .then((res) => {
        setListBook(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="list_book">
      {listBook.length ? (
        listBook.map((item, i) => (
          <div className={deletebtn === i ? "book_itemsbacl" : "book_items"}>
            <h2 className="title">{item.title}</h2>
            <div>
              Author : {item.author}
              <p>Price : {item.price}</p>
              Date : {new Date().toDateString()}
            </div>

            <div className="buttons">
              <Delete
                deletebtn={deletebtn}
                setDeletebtn={setDeletebtn}
                listBook={listBook}
                setListBook={setListBook}
                setBookState={setBookState}
                setAddBook={setAddBook}
                setList_btn={setList_btn}
                setEditIndex={setEditIndex}
                bookState={bookState}
                editIndex={editIndex}
                item={item}
                i={i}
              />
            </div>
          </div>
        ))
      ) : (
        <p className="nodata">No Books Avaliabl,please add some book !</p>
      )}
    </div>
  );
};

export default ListBook;
