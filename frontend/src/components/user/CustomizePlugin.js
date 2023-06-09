import React, { useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../../config";
import CommentPlugin from "./comment";
import ReviewPlugin from "./review";
import { toast } from "react-hot-toast";

const { apiUrl, pluginOptions } = app_config;

const CustomizePlugin = () => {
  const { pluginName } = useParams();

  const [pluginCount, setPluginCount] = useState(1);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [selPlugin, setSelPlugin] = useState(
    pluginName ? pluginName : "comment"
  );

  const [userid, setUserid] = useState(currentUser._id);
  const [dburl, setDburl] = useState("");

  const [pluginConfig, setPluginConfig] = useState(
    pluginOptions[pluginName ? pluginName : "comment"]
  );

  const [commentFeatures, setCommentFeatures] = useState([]);




  const generatePlugin = () => {};

  const getPluginCode = ({ userid, pluginName, dburl }) => {
    return `<div id="review-plugin" userid="${userid}" dburl="${dburl}"></div>
<script src="http://localhost:5000/index.js" ></script>`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getPluginCode({ userid, dburl }));
    toast.success("Code Copied to Clipboard");
    setPluginCount(pluginCount + 1);
    console.log(pluginCount);

  };

  const showPluginOptions = () => {
    if (selPlugin === "comment") {
      return (
        <div className="container" >
          <div className="card mb-3" >
            <div className="card-header" >
              <h3>Plugin Configuration</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-3">Database URL</div>
                <div className="col-md-8 mb-3">
                  <input className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">Features</div>
                <div className="col-md-8 mb-3">
                  {pluginOptions.comment.features.map((feature, index) => (
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={commentFeatures.includes(feature)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCommentFeatures([...commentFeatures, feature]);
                          } else {
                            setCommentFeatures(
                              commentFeatures.filter((f) => f !== feature)
                            );
                          }
                        }}
                      />
                      <label className="form-check-label">{feature}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">Items to Include</div>
                <div className="col-md-8 mb-3">
                  <input className="form-control" />
                </div>
              </div>

              <div className="">
                <h3 className="mb-2">Paste the code below in your html file</h3>
                <textarea
                  className="form-control"
                  rows={10}
                  value={getPluginCode({ userid, dburl })}
                  disabled
                ></textarea>

                <button
                  className="btn btn-secondary mt-3"
                  onClick={copyToClipboard}
                >
                  <i className="fas fa-copy"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">Plugin Preview</div>
            <div className="card-body">
              <CommentPlugin />
            </div>
          </div>
        </div>
      );
    } else if (selPlugin === "review") {
      return (
        <div className="container">
          <div className="card mb-3">
            <div className="card-header">
              <h3>Plugin Configuration</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-3">Database URL</div>
                <div className="col-md-8 mb-3">
                  <input className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">Features</div>
                <div className="col-md-8 mb-3">
                  {pluginOptions.comment.features.map((feature, index) => (
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={commentFeatures.includes(feature)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCommentFeatures([...commentFeatures, feature]);
                          } else {
                            setCommentFeatures(
                              commentFeatures.filter((f) => f !== feature)
                            );
                          }
                        }}
                      />
                      <label className="form-check-label">{feature}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">Items to Include</div>
                <div className="col-md-8 mb-3">
                  <input className="form-control" />
                </div>
              </div>

              <div className="">
                <h3 className="mb-2">Paste the code below in your html file</h3>
                <textarea
                  className="form-control"
                  rows={10}
                  value={getPluginCode({ userid, dburl })}
                  disabled
                ></textarea>

                <button
                  className="btn btn-secondary mt-3"
                  onClick={copyToClipboard}
                >
                  <i class="fas fa-copy"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">Plugin Preview</div>
            <div className="card-body">
              <ReviewPlugin />
            </div>
          </div>
        </div>
      );
    }else if(selPlugin === "review"){
        return (
          <div className="container">
            <div className="card mb-3">
              <div className="card-header">
                <h3>Plugin Configuration</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 mb-3">Database URL</div>
                  <div className="col-md-8 mb-3">
                    <input className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">Features</div>
                  <div className="col-md-8 mb-3">
                    {pluginOptions.comment.features.map((feature, index) => (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={commentFeatures.includes(feature)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setCommentFeatures([...commentFeatures, feature]);
                            } else {
                              setCommentFeatures(
                                commentFeatures.filter((f) => f !== feature)
                              );
                            }
                          }}
                        />
                        <label className="form-check-label">{feature}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">Items to Include</div>
                  <div className="col-md-8 mb-3">
                    <input className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-header">Plugin Preview</div>
              <div className="card-body">
                <ReviewPlugin />
              </div>
            </div>
          </div>
          
        );
      }
  };

  return <div>{showPluginOptions()}</div>;
};

export default CustomizePlugin;
