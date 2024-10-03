import { BsGripVertical } from 'react-icons/bs';
import AssignmentsControls from './AssignmentsControls';
import AssignmentsControlButtons from './AssignmentsControlButtons';
import EachAssignControlButtons from './EachAssignControlButtons';
import EachAssignHead from './EachAssignHead';
import { RxTriangleDown } from "react-icons/rx";

export default function Assignments() {
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
            <li className="wd-each-assign list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
              <EachAssignHead />
              <div className="flex-grow-1 ms-4">
                <p className="wd-each-assign-list-item mb-0">
                  <a className="wd-assignment-link custom-link fs-4"
                    href="#/Kanbas/Courses/1234/Assignments/A1">
                    A1
                  </a><br />
                  <div className='fs-5'>
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am |<br />
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts </div>
                </p>
              </div>
              <EachAssignControlButtons />
            </li>
            <li className="wd-each-assign list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
              <EachAssignHead />
              <div className="flex-grow-1 ms-4">
                <p className="wd-each-assign-list-item mb-0">
                  <a className="wd-assignment-link custom-link fs-4"
                    href="#/Kanbas/Courses/1234/Assignments/A1">
                    A2
                  </a><br />
                  <div className='fs-5'>
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am |<br />
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts </div>
                </p>
              </div>
              <EachAssignControlButtons />
            </li>

            <li className="wd-each-assign list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
              <EachAssignHead />
              <div className="flex-grow-1 ms-4">
                <p className="wd-each-assign-list-item mb-0">
                  <a className="wd-assignment-link custom-link fs-4"
                    href="#/Kanbas/Courses/1234/Assignments/A1">
                    A3
                  </a><br />
                  <div className='fs-5'>
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am |<br />
                  <strong>Due</strong> May 27 at 11:59pm | 100 pts</div>
                </p>
              </div>
              <EachAssignControlButtons />
            </li>

          </ul>
        </li>
      </ul>
    </div>

  );
}