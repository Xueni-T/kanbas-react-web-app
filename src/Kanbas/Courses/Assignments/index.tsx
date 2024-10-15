import { BsGripVertical } from 'react-icons/bs';
import AssignmentsControls from './AssignmentsControls';
import AssignmentsControlButtons from './AssignmentsControlButtons';
import EachAssignControlButtons from './EachAssignControlButtons';
import EachAssignHead from './EachAssignHead';
import { RxTriangleDown } from "react-icons/rx";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div>
      <AssignmentsControls />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center fs-4">
              <BsGripVertical className="me-2 fs-3" />
              <RxTriangleDown className="me-2 fs-5" />
              <span><strong>ASSIGNMENTS</strong></span>
            </div>
            <AssignmentsControlButtons />
          </div>
          <ul className="wd-assign-list list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-each-assign list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                  <EachAssignHead />
                  <div className="flex-grow-1 ms-4">
                    <p className="wd-each-assign-list-item mb-0">
                      <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link custom-link fs-4">
                        {assignment.title}
                      </Link><br />
                      <div className='fs-5'>
                        <span className="text-danger">{assignment.module_name}</span> | <strong>Not available until</strong> {assignment.availableDate} |<br />
                        <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts </div>
                    </p>
                  </div>
                  <EachAssignControlButtons />
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>

  );
}