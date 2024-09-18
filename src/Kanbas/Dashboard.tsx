import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course1">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course1-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course1-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course2">
          <br></br>
          <img src="/images/5001.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course2-link"
              to="/Kanbas/Courses/5001/Home">
              CS5001 Intensive Foundations of Computer Science
            </Link>
            <p className="wd-dashboard-course2-title">
              Foundations of Python
            </p>
            <Link to="/Kanbas/Courses/5001/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course3">
          <br></br>
          <img src="/images/5002.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course3-link"
              to="/Kanbas/Courses/5002/Home">
              CS5002 Discrete Math
            </Link>
            <p className="wd-dashboard-course3-title">
              Discrete Structures
            </p>
            <Link to="/Kanbas/Courses/5002/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course4">
          <br></br>
          <img src="/images/5004.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course4-link"
              to="/Kanbas/Courses/5002/Home">
              CS5004 Java
            </Link>
            <p className="wd-dashboard-course4-title">
              Object Oriented Design
            </p>
            <Link to="/Kanbas/Courses/5004/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course5">
          <br></br>
          <img src="/images/5008.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course5-link"
              to="/Kanbas/Courses/5008/Home">
              CS5008 C Programming
            </Link>
            <p className="wd-dashboard-course5-title">
              Data Structures, Algorithms, and their Applications
            </p>
            <Link to="/Kanbas/Courses/5008/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course6">
          <br></br>
          <img src="/images/5200.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course6-link"
              to="/Kanbas/Courses/5200/Home">
              CS5200 Database
            </Link>
            <p className="wd-dashboard-course6-title">
              Database Management Systems
            </p>
            <Link to="/Kanbas/Courses/5200/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course7">
          <br></br>
          <img src="/images/5610.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course7-link"
              to="/Kanbas/Courses/5610/Home">
              CS5610 Web Development
            </Link>
            <p className="wd-dashboard-course7-title">
              Web Development with HTML, CSS, JavaScript, and Node.js
            </p>
            <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course8">
          <br></br>
          <img src="/images/husky.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course8-link"
              to="/Kanbas/Courses/husky/Home">
              Husky 101
            </Link>
            <p className="wd-dashboard-course8-title">
              Northeastern University Orientation
            </p>
            <Link to="/Kanbas/Courses/husky/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}