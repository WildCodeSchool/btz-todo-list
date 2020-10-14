import React from 'react';
// import PropTypes from 'prop-types';

function TodoForm({ handleSubmit, handleChange, inputValue }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">ADD TODO</button>
    </form>
  );
}

// TodoForm.propTypes = {
//   inputValue: PropTypes.string().isRequired,
//   handleSubmit: PropTypes.func().isRequired,
//   handleChange: PropTypes.func().isRequired,
// };

export default TodoForm;
