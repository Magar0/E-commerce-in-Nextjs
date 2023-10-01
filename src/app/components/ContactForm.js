'use client'
import styles from "@/app/contact/contactform.module.css"
import { useState } from "react"

const ContactForm = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""
  })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        })
      })
      if (res.status === 200) {
        setUser(
          {
            username: "",
            email: "",
            phone: "",
            message: ""
          })
        setStatus("success")
      }
      else {
        setStatus("error")
      }
    }
    catch (e) {
      console.log("Error", e)
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(pre => ({ ...pre, [name]: value }))
  }

  return (
    <form className={styles.contact_form} onSubmit={(e) => handleSubmit(e)}>

      <div>
        <label htmlFor="username">
          Name:
          <input type="text" name="username" id="username" placeholder="Enter Your Name" value={user.username} onChange={handleChange} required />
        </label>
      </div>

      <div>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" placeholder="Enter Your Name" value={user.email} onChange={handleChange} required />
        </label>
      </div>

      <div>
        <label htmlFor="number">
          Phone No.:
          <input type="number" name="phone" id="phone" placeholder="Enter Your Phone Number" value={user.phone} onChange={handleChange} required />
        </label>
      </div>

      <div>
        <label htmlFor="message">
          Message:
          <textarea type="text" name="message" id="message" rows="6" placeholder="Type what you want to say us" value={user.message} onChange={handleChange} required />
        </label>
      </div>

      <div style={{ textAlign: "end" }}>
        {status == "success" && <p style={{ color: "green" }} >Thank you for your message</p>}
        {status == "error" && <p style={{ color: "red" }} >There was an error submitting your message.</p>}
        <button type="Submit" className="button" onClick={handleSubmit}>Submit</button>
      </div>

    </form>
  )
}

export default ContactForm;