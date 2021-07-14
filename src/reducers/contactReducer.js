import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../constant/types";

const intialState = {
  contacts: [
    {
      id: "1",
      name: "saad",
      phone: "12345",
      email: "saad@123",
      gender: "Male",
      status: "Unmarried",
      job: false,
    },
    {
      id: "2",
      name: "waqas",
      phone: "12345",
      email: "waqas@123",
      gender: "Male",
      status: "Unmarried",
      job: false,
    },
    {
      id: "3",
      name: "qasim",
      phone: "12345",
      email: "qasim@123",
      gender: "Male",
      status: "Unmarried",
      job: false,
    },
  ],
  contact: null,
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
