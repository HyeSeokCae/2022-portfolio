import React, {useState} from "react";
import "./book.css";
function Books() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const OpenBook = () => {
    setOpen((current) => !current);
    if (open != true) {
      alert("뻔하게 했겠..어? 했네..");
    }

    setValue(50);
  };

  return (
    <>
      {!open ? (
        <div className="bookBlind" onClick={OpenBook}></div>
      ) : (
        <div className="skills modalClose">
          <div className="progBox">
            <p>HTML</p>
            <progress
              className="progress"
              value={`${value + 1}`}
              max="51"
            ></progress>
            <b>51%</b>
          </div>
          <div className="progBox">
            <p>CSS</p>
            <progress
              className="progress"
              value={`${value + 1}`}
              max="51"
            ></progress>
            <b>51%</b>
          </div>
          <div className="progBox">
            <p>JS</p>
            <progress
              className="progress"
              value={`${value}`}
              max="51"
            ></progress>
            <b>50%</b>
          </div>
          <div className="progBox">
            <p>REACT</p>
            <progress
              className="progress"
              value={`${value}`}
              max="51"
            ></progress>
            <b>50%</b>
          </div>
          <div className="progBox">
            <p>PHOTOSHOP</p>
            <progress
              className="progress"
              value={`${value - 1}`}
              max="51"
            ></progress>
            <b>49%</b>
          </div>
          <button onClick={OpenBook} className="close">
            ❌
          </button>
        </div>
      )}
    </>
  );
}

export default Books;
