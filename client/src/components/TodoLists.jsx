import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import List from "./List";

const TodoLists = () => {
  return (
    <div className="row d-flex justify-content-center container">
      <div className="col-md-8">
        <div className="card-hover-shadow-2x mb-3 card">
          <div className="card-header-tab card-header">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="fa fa-tasks"></i>&nbsp;Task Lists</div>
          </div>
          <div className="scroll-area-sm">
            <perfect-scrollbar className="ps-show-limits">
              <div style={{position: 'static'}} className="ps ps--active-y">
                <div className="ps-content">
                  <ul className="list-group list-group-flush">
                    <List />
                  </ul>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
          <div className="d-block text-right card-footer"><button className="mr-2 btn btn-link btn-sm">Cancel</button><button className="btn btn-primary">Add Task</button></div>
        </div>
      </div>
    </div>
  )
};

export default TodoLists;