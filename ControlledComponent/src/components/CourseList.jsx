import { useEffect, useState } from "react";

function CourseList() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    fetch("http://localhost:3001/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch(() => console.log("Backend not running"));

  }, []);

  return (

    <div className="card">

      <h2>Courses</h2>

      {
        courses.map((course) => (

          <p key={course.id}>
            {course.name} - {course.duration}
          </p>

        ))
      }

    </div>
  );
}

export default CourseList;