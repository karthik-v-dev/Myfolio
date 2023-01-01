import React from 'react'
import { Button,Form,Message } from 'semantic-ui-react'
export default function Contactme() {
  return (
    <div className="ui form F-contact F">
     <Message
      attached
      header='CONTACT FORM'
      content='WELCOME TO OUR SITE!'
      className='t-center'
    />
    <Form className='attached fluid segment required field'>
     
      <Form.Input  type="text" placeholder="Full Name"/>
      
      <Form.Input  type='email' placeholder='E-Mail'/>
      <Form.Input  type="tel" placeholder="Phone No"/>
      <div className="field">
        <textarea rows="3"  placeholder="Plese text your requirement..."></textarea>
      </div>
      <Form.Checkbox inline label='I agree to the terms and conditions' />
      <Button color='blue'tabindex="0">SEND ME</Button>
    </Form>
</div>
  )
}
