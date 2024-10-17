import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find(
    (assignment) => assignment.course === cid && assignment._id === aid
  );
  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-name">Assignment Name</label>
          <input id="wd-name" className="form-control" value={assignment.title} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <textarea id="wd-description" className="form-control" rows={12} cols={50}
            value={assignment.description}>
          </textarea>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <div className="row mb-3 align-items-center">
            <div className="col-md-4 text-end">
              <label htmlFor="wd-points">Points</label>
            </div>
            <div className="col-md-8">
              <input id="wd-points" className="form-control" value={assignment.points} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 text-end">
              <label htmlFor="wd-assign">Assign</label>
            </div>
            <div className="col-md-8">
              <fieldset className="border p-3">
                <div className="mb-3">
                  <label htmlFor="wd-assign-to"><strong>Assign to</strong></label>
                  <input id="wd-assign" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="wd-due-date"><strong>Due</strong></label>
                  <input type="datetime-local" id="wd-due-date" className="form-control" value={assignment.dueDateValue} />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="wd-available-from"><strong>Available from</strong></label>
                    <input type="datetime-local" id="wd-available-from" className="form-control" value={assignment.availableDateValue} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="wd-available-until"><strong>Until</strong></label>
                    <input type="datetime-local" id="wd-available-until" className="form-control" />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col text-end">
          <hr />
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
