import './App.css'
import { useState } from 'react'

import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import CourseList from './components/CourseList'

function App() {

  const [registeredUser, setRegisteredUser] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div>

      {
        !registeredUser ?

          <RegistrationForm
            setRegisteredUser={setRegisteredUser}
          />

          :

          !isLoggedIn ?

            <LoginForm
              registeredUser={registeredUser}
              setIsLoggedIn={setIsLoggedIn}
            />

            :

            <CourseList />
      }

    </div>
  )
}

export default App