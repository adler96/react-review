import React from 'react';

function AddTodoForm() {
  return (
    <>
      <form>
        <label>Task:</label> <br />
        <input type="text" /> <br />
        <label>Date:</label>  <br />
        <input type="text" /> <br />
        <button>Save</button>
      </form>
    </>
  )
}

export default AddTodoForm