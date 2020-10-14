import React from 'react';
// import PropTypes from 'prop-types';

function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          // eslint-disable-next-line react/no-array-index-key
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default TodoList;
