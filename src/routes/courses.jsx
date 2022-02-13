import { getCourses } from "../data-courses";
import { Link, Outlet } from "react-router-dom";

export default function Courses() {
  let courses = getCourses()
  console.log('courses:', courses)
  return (
      <div style={{ display: "flex" }}>
        <nav
        style={{
          borderRight: "solid 1px",
          borderColor: "grey",
          padding: "1rem"
        }}
        >
        {courses.map(course => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/courses/${course.name}`}
            key={course.name}
          >
            {course.name}
          </Link>
        ))}
        </nav>
        <Outlet/>
      </div>
  );
}
