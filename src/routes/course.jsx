import { useParams } from 'react-router-dom';
import { getCourse } from '../data-courses';
import { Image, Container, Card } from 'react-bootstrap';
import { getPlayersByCourse } from '../data-players';

export default function Course() {
  let params = useParams();
  let course = getCourse(params.courseName);
  let players = getPlayersByCourse(params.courseName);

  console.log('course:', course);
  return (
    <Card style={{ width: '100%' }}>
      <Container>
        <Image
          fluid
          src={course.logoURL}
          style={{ height: '150px' }}
          className="mx-auto"
        />
      </Container>
      <Card.Body>
        <Card.Title className="text-center">
          <h3>{course.name}</h3>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">
          {course.county}
        </Card.Subtitle>
        <Container style={{ backgroundColor: 'skyBlue' }} className="pt-3">
          <Card.Text>Imreorí</Card.Text>
          {players.map((player) => (
            <p>{player.firstName}</p>
          ))}
        </Container>
      </Card.Body>
    </Card>
    // <div style={{ padding: '1rem' }}>
    //   <h4>{course.name}</h4>
    //   <div style={{ padding: '1rem' }}>
    //     <Image fluid src={course.logoURL} style={{maxHeight: '200px'}}/>
    //   </div>
    //   <p>{course.county}</p>
    //   <p>Galf le Gaeilge imreoirí: {course.members}</p>
    // </div>
  );
}
