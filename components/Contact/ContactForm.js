import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const alertFailure = () => {
  MySwal.fire({
    title: "Sorry!",
    text: "Something went bad. Please message us directly with our email adress",
    icon: "error",
    timer: 7000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(contact);

    await axios
      .post("/api/mail", {
        customer_message: contact.text,
        customer_email: contact.email,
        customer_name: contact.name,
        customer_phone: contact.number,
        customer_field: contact.subject,
      })
      .then((response) => {
        setContact(INITIAL_STATE);
        console.log(response);
        setLoading(false);
        alertContent();
      })
      .catch((error) => {
        alertFailure();
        setLoading(false);
        console.log(
          "An error has occured when trying to post the customer message",
          error
        );
      });

    // try {
    //   const url = `${baseUrl}/api/contact`;
    //   const { name, email, number, subject, text } = contact;
    //   const payload = { name, email, number, subject, text };
    //   const response = await axios.post(url, payload);
    //   console.log(response);
    //   setContact(INITIAL_STATE);
    //   alertContent();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                value={contact.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="email"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                placeholder="Email"
                className="form-control"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="number"
                min="0"
                name="number"
                placeholder="Phone number"
                className="form-control"
                value={contact.number}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control"
                value={contact.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="text"
                cols="30"
                rows="6"
                placeholder="Write your message"
                className="form-control"
                value={contact.text}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <button type="submit" className="btn btn-primary">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
