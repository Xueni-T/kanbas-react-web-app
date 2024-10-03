import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="d-flex justify-content-between align-items-center p-2 mb-5">
      <div className="input-group input-group-lg me-3" style={{ width: '350px' }}>
        <span className="input-group-text white-bg">
          <IoSearchOutline />
        </span>
        <input
          id = "wd-search-assignments"
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </div>
      <div className="d-flex">
        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-2">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
      </div>
    </div>
  );
}