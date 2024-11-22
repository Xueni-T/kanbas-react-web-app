import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enroll = async (courseId: string, userId: string) => {
  try {
    const response = await axios.put(`${ENROLLMENTS_API}/${courseId}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error enrolling in course:", error);
    throw error;
  }
};

export const unenroll = async (courseId: string, userId: string) => {
  try {
    const response = await axios.delete(
      `${ENROLLMENTS_API}/${courseId}/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error unenrolling from course:", error);
    throw error;
  }
};
