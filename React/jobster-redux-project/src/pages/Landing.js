import { Logo } from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              repellendus quaerat dicta error adipisci veniam nostrum libero
              modi similique nam enim, magni doloremque necessitatibus quisquam
              ipsum debitis recusandae vel aperiam?
            </p>
            <Link to='/register' className='btn btn-hero'>
              login/register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </main>
    </Wrapper>
  )
}

export default Landing
