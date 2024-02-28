import React, { useState } from "react";
import "./AddBook.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBook = ({
  bookState,
  setBookState,
  editIndex,
  listBook,
  setListBook,
  setEditIndex,
  setUpDated,
  upDated
 
}) => {

  const [submitbutton,setSubmitbutton]=useState(false)

  const handlename = (e) => {
    setBookState({ ...bookState, title: e.target.value });
  };

  const handleauthor = (e) => {
    setBookState({ ...bookState, author: e.target.value });
  };
  const handleprice = (e) => {
    setBookState({ ...bookState, price: e.target.value });
  };



  const handlename1 = (e) => {
    setEditIndex({ ...editIndex, title: e.target.value });
  };

  const handleauthor1 = (e) => {
    setEditIndex({ ...editIndex, author: e.target.value });
  };
  const handleprice1 = (e) => {
    setEditIndex({ ...editIndex, price: e.target.value });
  };

  const resetValues = () => {
    setBookState({
      title: "",
      author: "",
      price: "",
    });
  };
  const resetValuessave = () => {
    setEditIndex({
      title: "",
      author: "",
      price: "",
    });
  };

  const handlesubmit = () => {
    
      axios
      .post("http://localhost:555/books",bookState)
      .then((res) => {
        console.log(res.data);
        toast("Successfully");
        resetValues();
      })
      .catch((err) => {
        console.log(err, "error");
        toast("error");
      });
  };
  console.log(bookState)
  
  const handlesave = () => {
    setUpDated(false)
    const obj = {
      title: editIndex.title,
      author: editIndex.author,
      price: editIndex.price
    }
    console.log(editIndex)
    axios
      .put(`http://localhost:555/books/${editIndex._id}`,obj)
      .then((res) => {
         console.log(res.data);
         toast("Data Updated Successfully");
         resetValuessave();
      })
      .catch((err) => {
        console.log(err);
      });
       
  };


  return (
    <div className="from">
      {editIndex && upDated?
      <div>
            <label className="label">Book Name</label>
            <p>
              <input
                onChange={handlename1}
                value={editIndex.title}
                className="input"
                type="text"
                placeholder="Enter Name of Book"
              />
            </p>
            <label className="label">Book author</label>
            <p>
              <input
                onChange={handleauthor1}
                value={editIndex.author}
                className="input"
                type="text"
                placeholder="Enter  author of Book"
              />
            </p>
            <label className="label">Book Price</label>
            <p>
              <input
                onChange={handleprice1}
                value={editIndex.price}
                className="input"
                type="text"
                placeholder="Enter price of Book"
              />
            </p></div>
      :<div>   
       <label className="label">Book Name</label>
      <p>
        <input
          onChange={handlename}
          value={bookState.title}
          className="input"
          type="text"
          placeholder="Enter Name of Book"
        />
      </p>
      <label className="label">Book author</label>
      <p>
        <input
          onChange={handleauthor}
          value={bookState.author}
          className="input"
          type="text"
          placeholder="Enter  author of Book"
        />
      </p>
      <label className="label">Book Price</label>
      <p>
        <input
          onChange={handleprice}
          value={bookState.price}
          className="input"
          type="text"
          placeholder="Enter price of Book"
        />
      </p></div>  }



      <span>
        {editIndex && upDated ? (
               <button
               className="submit"
               disabled={!editIndex.title || !editIndex.author || !editIndex.price}
               onClick={handlesave}
             >
               Save
             </button>
     
        ) : (
     
               <button
               className="submit"
               disabled={!bookState.title || !bookState.author || !bookState.price}
               onClick={handlesubmit}
             >
               Submit
             </button>
        )}
        <ToastContainer />
      </span>
    </div>
  );
};

export default AddBook;
