import React from "react";
import { Button, Message, Modal } from "semantic-ui-react";
// import {Link} from 'react-router-dom';

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

const Modalopen = (props) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  var Data = {
    id: "",
    title: "",
    siteoverview: ``,
    toolstitle: "",
    tools: [],
    livetitle: "",
    url_modal: "",
  };
  let width = window.innerWidth;
  const { open, size } = state;

  Data = { ...Object.values(props.passdata || {}) };

  console.log(Data);

  return (
    <>
      {width < 756 ? (
        <Button
          onClick={() => dispatch({ type: "open", size: "mini" })}
          primary
          className="btn"
        >
          CASE STUDY
        </Button>
      ) : width < 1024 ? (
        <Button
          onClick={() => dispatch({ type: "open", size: "tiny" })}
          primary
          className="btn"
        >
          CASE STUDY
        </Button>
      ) : (
        <Button
          onClick={() => dispatch({ type: "open", size: "large" })}
          primary
          className="btn"
        >
          CASE STUDY
        </Button>
      )}
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
        key={Data[0] && Data[0]}
      >
        <Message
          attached
          header={Data[1] && Data[1]}
          content="-WHAT IS WHAT?-"
          className="t-center"
        />
        <div className="Casemain">
          <div className="Caseleft">
            <img src={props.url} alt={props.name} className="siteCap" />
          </div>
          <div className="Caseright">
            <div>
              <h2>{Data[2] && Data[2]}</h2>
              <p>{Data[3] && Data[3]}</p>
            </div>
            <div>
              <h2>{Data[4] && Data[4]}</h2>
              <div className="d-flex">
                {console.log(Data[5])}
                {Data[5] &&
                  Data[5].map((sk) => {
                    return (
                      <span className="skill-tab text-weight" key={sk.id}>
                        {sk.skill}
                      </span>
                    );
                  })}
              </div>
            </div>
            <div>
              <h2>{Data[6] && Data[6]}</h2>
              <a href={Data[7] && Data[7]} rel="noreferrer" target="_blank">
                <button className="ui green  button btn ">LIVE PREVIEW</button>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Modalopen;
