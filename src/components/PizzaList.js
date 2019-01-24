import React from 'react';

const PizzaList = props => {
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <ul>
        {props.pizzas.map(pizza => (
          <li key={pizza.id} onClick={() => props.selectPizza(pizza.id)}>
            {pizza.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
