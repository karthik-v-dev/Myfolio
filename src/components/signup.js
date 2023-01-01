import React from 'react'
import { Button, Form, Icon, Message,Modal} from 'semantic-ui-react'
import Login from './login';
import {Link} from 'react-router-dom';

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

const Signup = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  let width = window.innerWidth;
  const { open, size } = state

  return (
    <>
   { width<756 ?
      <Button onClick={() => dispatch({ type: 'open', size: 'mini' })} primary> <Icon name='user'/>Sign up</Button>
   :
   <Button onClick={() => dispatch({ type: 'open', size: 'tiny' })} primary> <Icon name='user'/>Sign up</Button>
      
 }
   <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Message
      attached
      header='SIGN UP FORM'
      content='WELCOME TO OUR SITE!'
      className='t-center'
    />
    <Form className='attached fluid segment'>
      <Form.Group widths='equal'>
        <Form.Input
          fluid
          label='First Name'
          placeholder='First Name'
          type='text'
          autoFocus
        />
        <Form.Input
          fluid
          label='Last Name'
          placeholder='Last Name'
          type='text'
        />
      </Form.Group>
      <Form.Input label='Username' placeholder='Username' type='text' />
      <Form.Input label='Password' type='password' />
      <Form.Input label='Email' type='email' placeholder='E-Mail'/>
      <Form.Checkbox inline label='I agree to the terms and conditions' />
      <Button color='blue'>Sign up&nbsp;<Icon name='user'/></Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already signed up?&nbsp;<Link><Login /></Link>&nbsp;instead.
    </Message>
      </Modal>
    </>
  )
}

export default Signup;