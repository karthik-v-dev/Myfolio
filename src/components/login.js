import React from "react";
import { Modal, Button, Form, Icon, Message } from "semantic-ui-react";
import Signup from "./signup";
import { Link } from "react-router-dom";

function exampleReducer(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}

const Login = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  let width = window.innerWidth;
  const { open, size } = state;

  return (
    <>
      {width < 756 ? (
        <Button
          onClick={() => dispatch({ type: "open", size: "tiny" })}
          positive
        >
          Log-in &nbsp;
          <Icon name="sign-in" />
        </Button>
      ) : (
        <Button
          onClick={() => dispatch({ type: "open", size: "tiny" })}
          positive
        >
          Log-in &nbsp;
          <Icon name="sign-in" />
        </Button>
      )}
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Message
          attached
          header="LOGIN FORM"
          content=""
          className="t-center"
        />
        <Form className="attached fluid segment">
          <Form.Input
            label="Username"
            placeholder="Username"
            type="text"
            autoFocus
          />
          <Form.Input label="Password" type="password" />
          <Form.Checkbox inline label="I agree to the terms and conditions" />
          <Button positive>
            Log-in &nbsp;
            <Icon name="sign-in" />
          </Button>
        </Form>
        <Message attached="bottom" warning>
          <Icon name="help" />
          New user signed up?&nbsp;
          <Link>
            <Signup />
          </Link>
          &nbsp;instead.
        </Message>
      </Modal>
    </>
  );
};

export default Login;
