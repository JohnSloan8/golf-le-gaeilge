import { getCourses } from "../data-courses";
import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'

export default function Courses() {
  let courses = getCourses()
  console.log('courses:', courses)
  return (
      <Container>
        <Row>
          <Col xs={4}>
          {courses.map(course => (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/courses/${course.name}`}
              key={course.name}
            >
              {course.name}
            </Link>
          ))}
          </Col>
          <Col xs={8}>
            <Outlet/>
          </Col>
        </Row>
      </Container>
  );
}
