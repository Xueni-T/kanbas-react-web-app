import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <div id="wd-dashboard-published" className="ms-3">
        <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                  <img src="/images/reactjs.jpg" width="100%" height={160} alt="React JS Course"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1234 React JS
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/5001/Home">
                  <img src="/images/5001.jpg" width="100%" height={160} alt="Python Course"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5001 Intensive Foundations of Computer Science
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Foundations of Python
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/5002/Home">
                  <img src="/images/5002.jpg" width="100%" height={160} alt="Discrete Math Course"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5002 Discrete Math
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Discrete Structures
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/5004/Home">
                  <img src="/images/5004.jpg" width="100%" height={160} alt="Java Course"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5004 Java
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Object Oriented Design
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/5008/Home">
                  <img src="/images/5008.jpg" width="100%" height={160} alt="C Programming Course"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5008 C Programming
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Data Structures, Algorithms, and their Applications
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/5200/Home">
                  <img src="/images/5200.jpg" width="100%" height={160} alt="Database Course"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5200 Database
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Database Management Systems
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/5610/Home">
                  <img src="/images/5610.jpg" width="100%" height={160} alt="Web Development Course"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS5610 Web Development
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Web Development with HTML, CSS, JavaScript, and Node.js
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/husky/Home">
                  <img src="/images/husky.jpg" width="100%" height={160} alt="Husky 101 Course"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      Husky 101
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Northeastern University Orientation
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}