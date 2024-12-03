import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as courseClient from "../client";
import PeopleTable from "./Table";

const People = () => {
  const { courseId } = useParams();
  const [users, setUsers] = useState([]);

  const fetchUsersForCourse = async () => {
    try {
      if (courseId) {
        const users = await courseClient.findUsersForCourse(courseId);
        setUsers(users);
      }
    } catch (error) {
      console.error("Error fetching users for course:", error);
    }
  };

  useEffect(() => {
    if (courseId) {
      fetchUsersForCourse();
    }
  }, [courseId]);

  return (
    <div>
      <h2>People</h2>
      <PeopleTable users={users} />
    </div>
  );
};

export default People;