import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Delete = ({
  listBook,
  editIndex,
  setListBook,
  i,
  deletebtn,
  setDeletebtn,
  setBookState,
  setAddBook,
  setList_btn,
  setEditIndex,
  bookState,
  item,
}) => {
  const handledelete = (i) => {
    setDeletebtn(i);
  };

  const handle = (i) => {
    axios
      .delete(`http://localhost:555/books/${listBook[i]?._id}`)
      .then((res) => {
        toast("it's deleted");
        if (res.status === 200) {
          setDeletebtn(false);
          axios
            .get("http://localhost:555/books")
            .then((res) => {
              setListBook(res.data.books);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlecancle = () => {
    setDeletebtn(false);
  };

  const handleedit = (item) => {
    setEditIndex(item);
    setAddBook(true);
    setList_btn(false);
  };
  return (
    <div>
      {deletebtn === i ? (
        <div className="confirmation_delete">
          <p className="delete_text">Are you sure you want to delete</p>
          <button className="cancle_delete1" onClick={handlecancle}>
            Cancel
          </button>
          <button className="cancle_delete" onClick={() => handle(i)}>
            Delete
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <button className="edit_btn2" onClick={() => handleedit(item)}>
            Edit
          </button>
          <button className="edit_btn1" onClick={() => handledelete(i)}>
            Delete
          </button>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default Delete;
