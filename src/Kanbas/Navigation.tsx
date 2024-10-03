import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function KanbasNavigation() {
  return (
    /*
    ● position-fixed - applies display: fixed so that the sidebar stays fixed in one place and doesn't scroll wit the rest of the screen
    ● bottom-0 top-0 - applies bottom: 0 and top: 0 so that the top edge is fixed at the top of the screen and the bottom edge is fixed at the bottom of the screen, effectively stretching the height of the element the whole height of the window.
    ● d-none d-md-block - applies display: none so that the element is initially hidden. And then applies display: block to display the element when the screen width reaches mid sized screens, e.g., 768 pixels
    ● z-2 - applies z-index: 2 which brings the element above other elements with a lower z-index.
    ● bg-black - applies background-color: black
    */
    <div id="wd-kanbas-navigation" style={{ width: 120 }}
      className="list-group rounded-0 position-fixed
      bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a>
      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account </Link>
      {/* ● Selected (active) links must have a white background with red text
          ● Non selected links must have a black background with white text
          ● The icons and text must be centered in the sidebar */}
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0
      bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </Link>
      <Link to="/Kanbas/Courses" id="wd-course-link"
        className="list-group-item text-white
      bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </Link>
      <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className="list-group-item text-white
      bg-black text-center border-0">
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar </Link>
      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className="list-group-item text-white
      bg-black text-center border-0">
        <FaInbox className="fs-1 text-danger" /><br />
        Inbox </Link>
      <Link to="/Kanbas/Labs" id="wd-labs-link"
        className="list-group-item text-white
      bg-black text-center border-0">
        <LiaCogSolid className="fs-1 text-danger" /><br />
        Labs </Link>
    </div>
  );
}