import { Roles } from '../../roles'

type Jobs = {
  name: string
  email: string
  password: string
  role: Roles
}

const job: Jobs = {
  name: 'shil',
  email: 'shil@g.com',
  password: '1234',
  role: Roles.admin,
}

//enums can be number or string
