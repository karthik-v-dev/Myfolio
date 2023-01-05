import React from "react";
import Data from "./data";
import Modalopen from "./modal";
export default function Mydesign() {
  return (
    <>
      <div className="F-mydesign F">
        <div className="ui one row grid">
          {Data.map((data) => {
            return (
              <div className="row" key={data.id}>
                <div className="ui segment">
                  <div className="ui segment Fix">
                    <div className="ui two column very relaxed grid">
                      <div className="column my-slide">
                        <img src={data.url} alt={data.headone} />
                      </div>
                      <div className="column my-slide">
                        <h1 className="h1">{data.headone}</h1>
                        <p className="p">
                          {data.description}
                          <span className="olive">{data.developer}</span>
                        </p>
                        {data.url_http && (
                          <a
                            href={data.url_http}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <button className="ui green  button btn ">
                              LIVE PREVIEW
                            </button>
                          </a>
                        )}
                        <Modalopen passdata={data.Modalopen} url={data.url} />
                      </div>
                    </div>
                    <div className="ui vertical divider">
                      <i className="hand point right icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
