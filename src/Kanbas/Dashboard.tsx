import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { enrollCourse, unenrollCourse } from "./enrollmentReducer";
import * as enrollmentClient from "./enrollmentClient";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
export default function Dashboard(
  { courses, course, setCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const fetchEnrolledCourses = async () => {
    try {
      const enrolledCourses = await userClient.findMyCourses();
      setFilteredCourses(enrolledCourses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEnrolledCourses();
  }, [currentUser]);

  const addNewCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourse({ _id: "", name: "", number: "", startDate: "", endDate: "", image: "reactjs.jpg", description: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const toggleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  const isEnrolled = (courseId: string) =>
    enrollments.some((enrollment: { user: string; course: string }) =>
      enrollment.course === courseId && enrollment.user === currentUser._id
    );
  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) => isEnrolled(course._id));

  const handleEnrollButton = async (courseId: string) => {
    await enrollmentClient.enroll(courseId, currentUser._id);
    dispatch(enrollCourse({ userId: currentUser._id, courseId }));
  };
  const handleUnenrollButton = async (courseId: string) => {
    await enrollmentClient.unenroll(courseId, currentUser._id);
    dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser?.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5> <br />
          <input value={course.name} className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <br /> </>)}
      {currentUser?.role === "STUDENT" && (
        <button className="btn btn-primary float-end" onClick={toggleShowAllCourses}>
          {showAllCourses ? "Enrollments" : "Enrollments"}
        </button>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses
            .map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <img src={`/images/${course.image}`} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    {currentUser?.role === "FACULTY" && (
                      <>
                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>
                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>
                      </>)}
                    <Link
                      to={isEnrolled(course._id) ? `/Kanbas/Courses/${course._id}/Home` : "#"}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      {isEnrolled(course._id) && <button className="btn btn-primary">Go</button>}
                    </Link>

                    {currentUser?.role === "STUDENT" && (
                      (isEnrolled(course._id) ? (
                        <button
                          className="btn btn-danger float-end"
                          onClick={(event) => {
                            event.preventDefault(); handleUnenrollButton(course._id);
                          }}>
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success float-end"
                          onClick={(event) => {
                            event.preventDefault(); handleEnrollButton(course._id);
                          }}>
                          Enroll
                        </button>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}