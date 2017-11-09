import React from 'react';

const staticStyle = {
  margin: '10px 50px',
}

const List =(props) => {
const style = {
  complete:{
    backgroundColor: 'white',
    color: 'green',
  },
  incomplete:{
    backgroundColor: 'white',
    color: 'red'
  }
};

const done = {
  complete:{
    textDecoration: 'line-through'
  },
  incomplete:{
textDecoration: 'none'
  }
};

  return(
      <ul>
        {props.items.map((item, index) => (
            <li key={index}
              style={done[item.complete ? 'complete' : 'incomplete']}
            >
              {item.todo}
              <button
                style={{...staticStyle, ...style[item.complete ? 'complete' : 'incomplete'], ...props.styles}}
                onClick={() => props.onComplete(index)}>{item.complete?'done':'todo'}
              </button>
            </li>
          )
        )}
      </ul>
)};



export default List;
