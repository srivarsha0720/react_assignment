import React, { useReducer } from "react";

/* ---------------- INITIAL STATE ---------------- */
const initialState = {
  step: 1,
  isSubmitted: false,
  formData: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
};

/* ---------------- REDUCER ---------------- */
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

/* ---------------- APP COMPONENT ---------------- */
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, formData, isSubmitted } = state;

  if (isSubmitted) {
    return (
      <div>
        <h2>Form Submitted Successfully</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      {step === 1 && (
        <>
          <h2>Step 1: Personal Details</h2>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
          />
          <br /><br />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />
          <br /><br />
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2>Step 2: Account Details</h2>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value,
              })
            }
          />
          <br /><br />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value,
              })
            }
          />
          <br /><br />
          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Previous
          </button>
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h2>Step 3: Review & Submit</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Username: {formData.username}</p>
          <br />
          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Previous
          </button>
          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}