import React, { useState } from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';
function Form() {
  const [dataArr, setDataArr] = useState([
    { txt: 'Apprendre Javascript', id: uuidv4() },
    { txt: 'Apprendre ReactJs', id: uuidv4() },
    { txt: 'Apprendre NextJs', id: uuidv4() },
  ]);

  const deleteElement = (id) => {
    // console.log(id);
    const filteredState = dataArr.filter((item) => {
      return item.id !== id;
    });
    setDataArr(filteredState);
  };
  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          Chose à faire
        </label>
        <input type="text" className="form-control" id="todo" />
        <button className="mt-2 btn btn-primary d-block">Envoyez</button>
      </form>
      <h2>Liste des choses à faire</h2>
      <ul className="list-group">
        {dataArr.map((item) => {
          return (
            <Item
              key={item.id}
              txt={item.txt}
              delFunction={deleteElement}
              id={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Form;
