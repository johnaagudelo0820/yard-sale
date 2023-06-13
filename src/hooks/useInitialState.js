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

  return {
    state,
    addToCard,
  };
};

export default useInitialState;
