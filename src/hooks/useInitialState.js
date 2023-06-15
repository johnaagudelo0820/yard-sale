import { useState } from 'react';

const initialState = {
  card: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCard = (payload) => {
    setState({
      ...state,
      card: [...state.card, payload],
    });
  };

  const removeFromCard = (payload) => {
    setState({
      ...state,
      card: state.card.filter(({ id }) => id !== payload.id),
    });
  };

  return {
    state,
    addToCard,
    removeFromCard,
  };
};

export default useInitialState;
