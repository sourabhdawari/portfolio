import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../css/contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
  const form = useRef();
  function notify() {
	  
}
const sendEmail = (e) => {
	
	e.preventDefault();
	const A = "service_5ka3ata";
	const B = "template_aikvj8c";
	const C = "01CWm7uX79lFc4wUJ";
	emailjs.sendForm(A, B, form.current, C)
	.then((result) => {
		console.log(result.text);
		toast("Your request has been sent! I will be in touch soon !");
		
          
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div className='mb-5'>
	<h1  className='ct mt-5  '>Contact</h1>
    <form ref={form} className="" onSubmit={sendEmail}>

    <div class="container contact-form shadow p-3 mb-5 bg-white rounded">
	<div class="row">
			<div  className='ct mt-5'></div>
	</div>
	<div class="row input-container mb-5">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" className='rounded'  name="user_name" required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" className='rounded' name="user_email" required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text"  className='rounded' name="user_phone" required />
					<label>phone</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea name="message" style={{ resize :"none"}} className='rounded' rows="1" required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12 mail mb-5">
				<div class="">
        <input className='submit-btn  primary_btn ' onClick={notify} type="submit" value="Send" required />
        </div>
		<ToastContainer />

			</div>
	</div>
</div>
    </form>


    </div>

    
  )
}
