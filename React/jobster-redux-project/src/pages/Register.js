import React, { useState } from 'react'
import { Logo, FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { toast } from 'react-toastify'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [fields, setFields] = useState(initialState)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFields({ ...fields, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = fields
    if (!email || !password || (!isMember && !name)) {
      toast.error('All fields required')
    }
  }

  const toggleMember = () => {
    setFields({ ...fields, isMember: !fields.isMember })
  }
  return (
    <Wrapper className='full-page'>
      <form onSubmit={onSubmit} className='form'>
        <Logo />
        <h3>{fields.isMember ? 'Login' : 'Register'}</h3>
        {fields.isMember && (
          <FormRow
            handleChange={handleChange}
            type='text'
            name='name'
            value={fields.name}
          />
        )}
        <FormRow
          handleChange={handleChange}
          type='email'
          name='email'
          value={fields.email}
        />
        <FormRow
          handleChange={handleChange}
          type='password'
          name='password'
          value={fields.password}
        />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {fields.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button onClick={toggleMember} className='member-btn' type='button'>
            {fields.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
