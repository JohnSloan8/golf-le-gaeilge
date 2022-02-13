import { useParams } from 'react-router-dom';
import { getCourse } from '../data-courses';
import { Image } from 'react-bootstrap';

export default function Course() {
  let params = useParams();
  let course = getCourse(params.courseName);
  console.log('course:', course);
  return (
    <div style={{ padding: '1rem' }}>
      <h4>{course.name}</h4>
      <div style={{ padding: '1rem' }}>
        <Image fluid src={course.logoURL} />
      </div>
      <p>{course.county}</p>
      <p>Galf le Gaeilge imreoirí: {course.members}</p>
    </div>
  );
}
