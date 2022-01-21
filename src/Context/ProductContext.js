import axios from "axios";
import React, { useReducer } from "react";

export const productContext = React.createContext();

const INIT_STATE = {
  detail: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_DETAIL": {
      return {
        ...state,
        detail: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getDetail = async (id) => {
    let { data } = await axios(`http://localhost:3001/phones/${id}`);
    dispatch({
      type: "GET_DETAIL",
      payload: data,
    });
  };

  return (
    <productContext.Provider value={{ detail: state.detail, getDetail }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
