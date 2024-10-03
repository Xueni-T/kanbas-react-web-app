import AssignToButton from "./AssignToButton";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-name">Assignment Name</label>
          <input id="wd-name" className="form-control" value="A1" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <textarea id="wd-description" className="form-control" rows={12} cols={50}>
            {`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

 • Your full name and section
 • Links to each of the lab assignments
 • Link to the Kanbas application
 • Links to all relevant source code repositories

The Kanas application should include a link to navigate back to the landing page.`}
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
              <input id="wd-points" className="form-control" value={100} />
            </div>
          </div>


          <div className="row mb-3 align-items-center">
            <div className="col-md-4 text-end">
              <label htmlFor="wd-group">Assignment Group</label>
            </div>
            <div className="col-md-8">
              <select id="wd-group" className="form-select">
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
              </select>
            </div>
          </div>


          <div className="row mb-3 align-items-center">
            <div className="col-md-4 text-end">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </div>
            <div className="col-md-8">
              <select id="wd-display-grade-as" className="form-select">
                <option selected value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="GPA">GPA</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 text-end">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </div>
            <div className="col-md-8">
              <fieldset className="border p-3">
                <div className="d-flex justify-content-center">
                  <select id="wd-submission-type" className="form-select">
                    <option value="Online">Online</option>
                  </select>
                </div>
                <legend className="col-form-label mt-3 pt-0"><strong>Online Entry Options</strong></legend>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                  <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="wd-website-url" checked />
                  <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                  <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                  <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                  <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 text-end">
              <label htmlFor="wd-assign">Assign</label>
            </div>
            <div className="col-md-8">
              <fieldset className="border p-3">
                <label htmlFor="wd-assign-to"><strong>Assign to</strong></label>
                <div className="mt-1 p-2 border rounded mb-3"><AssignToButton /></div>
                <div className="mb-3">
                  <label htmlFor="wd-due-date"><strong>Due</strong></label>
                  <input type="datetime-local" id="wd-due-date" className="form-control" value="2024-05-13T23:59" />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="wd-available-from"><strong>Available from</strong></label>
                    <input type="datetime-local" id="wd-available-from" className="form-control" value="2024-05-06T12:00" />
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
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </div>
    </div>
  );
}
