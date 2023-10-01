import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <>
      <h1 className="text_head text_center">Contact Us</h1>
      <ContactCard />

      <section className="contact_section">
        <h3>We would love to hear from you</h3>
        <ContactForm />
      </section>

      <div className="map_container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57008.75228517063!2d94.1612815234505!3d26.74287564739581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746c294ee518ba1%3A0x75147ff2c76406bc!2sJorhat%2C%20Assam!5e0!3m2!1sen!2sin!4v1696123397888!5m2!1sen!2sin" width={400} height={300} style={{ border: '0' }} allowFullScreen="" loading="lazy" className="map" referrerPolicy="no-referrer-when-downgrade" ></iframe>
      </div>

    </>
  )
}

export default Contact;