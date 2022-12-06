import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <br />
      <figure className="text-center">
      <blockquote className="blockquote">"And you may ask yourself, How did I get here?"</blockquote>
      </figure>
      <br />
        <p>
        You somehow ended up here, which you shouldn't have. <br />
        But now that you are here, you have some options, like a site map:
        </p>
        <div className='container'><ol>
          <li>Go to the map - which is the main page.</li>
          <br />
          <li>If you are logged in:
            <ul>
              <li>you can click on your email address in the top right to check your details.</li>
              <li>you can click the Logout button to Log out.</li>
            </ul>
          </li>
          <br />
          <li>If you are NOT logged in:
          <ul>
              <li>you can click on Log In to sign in to see your details.</li>
              <li>you can click the Signup button to register this service.</li>
            </ul>
          </li>

        </ol>
        </div>
      <Link to='/'>
        <span className='display-8'>Take me to the map</span>
      </Link>
    </div>
  )
}

export default NotFound