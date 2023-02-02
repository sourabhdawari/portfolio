import React from "react";

const Skills = () => {
  return (
    <div className="p-5">
      <div class="row">
        <div class="col-md-6 ">
          <div class="single-brand-item d-table shadow  bg-white rounded">
            <div class="d-table-cell text-center">
              <img src={require("../img/skills/html.png")} alt="" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-brand-item d-table shadow  bg-white rounded">
            <div class="d-table-cell text-center">
              <img src={require("../img/skills/js.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-md-6">
          <div class="single-brand-item d-table shadow  bg-white rounded">
            <div class="d-table-cell text-center">
              <img src={require("../img/skills/css.png")} alt="" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="single-brand-item d-table shadow bg-white rounded">
            <div class="d-table-cell text-center">
              <img src={require("../img/skills/jquery.png")} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="single-brand-item d-table shadow bg-white rounded">
            <div class="d-table-cell text-center">
              <img src={require("../img/skills/react.png")} alt="" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-brand-item d-table shadow bg-white rounded">
            <div class="d-table-cell text-center">
              <img src={require("../img/skills/express.png")} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="row ">
        <div class="col-md-6">
          <div class="single-brand-item d-table shadow  bg-white rounded">
            <div class="d-table-cell text-center">
              <img src={require("../img/skills/mongo.png")} alt="" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-brand-item d-table shadow  bg-white rounded">
            <div class="d-table-cell text-center">
              <img src={require("../img/skills/node.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-md-6">
          <div class="single-brand-item d-table shadow bg-white rounded">
            <div class="d-table-cell text-center">
              <img src={require("../img/skills/bootstrap.png")} alt="" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="single-brand-item d-table shadow bg-white rounded">
            <div class="d-table-cell text-center">
              <img src={require("../img/skills/git.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
