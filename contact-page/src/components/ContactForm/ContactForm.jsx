import style from './ContactForm.module.css'
import Button from '../Button/Button'
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';

const ContactForm = () => {
const [name , setName] = useState(" ")
 const [email , setEmail] = useState(" ")
  const [text , setText] = useState(" ")

 const onSubmit = (e)=>{

  e.preventDefault()

   setName(e.target[0].value);
   setEmail(e.target[1].value);
   setText(e.target[2].value);
  
 }
  
  
  return (
    <section className={style.container}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
            <Button 
              text="VIA SUPPORT CHAT"
                icon={<BiSolidMessageAltDetail fontSize="24px"
                   />}
            />

            <Button 
                  text="VIA CALLING"
                  icon={<FiPhoneCall />} 
                  />
        </div>

        <Button 
                  isOutline={true}
                  text="VIA EMAIL FORM"
                  icon={<MdEmail />} />

<form onSubmit={onSubmit}>
        <div className={style.form_control}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="Name" />
        </div>
        <div className={style.form_control}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        </div>
        <div className={style.form_control}>
        <label htmlFor="text">Message:</label>
        <textarea name="text" rows="7" />
        </div>
        <div style={{display:"flex",justifyContent:"end"}}>
        <Button text="Submit" />
        </div>
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{text}</p>
        </div>
      </form>


     

      </div>

   
      

      <div className={style.contact_image}>
        <img src="/images/contact.svg" alt="" />
      </div>

    </section>
  )
}

export default ContactForm
