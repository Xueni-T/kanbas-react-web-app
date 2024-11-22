import * as assignmentsClient from "./client";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function DeleteEachAssign({
  dialogTitle,
  assignmentId
}: {
  dialogTitle: string;
  assignmentId: string;
}) {
  const dispatch = useDispatch();
  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  return (
    <div id="wd-add-assignment-dialog" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{dialogTitle}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this assignment?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => removeAssignment(assignmentId)}
            >Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
}