import { useState } from "react";
import { contactFormEndpoint } from "../../data/portfolio";
import "./ContactForm.css";

const initialState = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) {
      next.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Enter a valid email";
    }
    if (!values.message.trim()) next.message = "Message can't be empty";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");
        setValues(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          disabled={status === "submitting"}
        />
        {errors.name && <span className="contact-form__error">{errors.name}</span>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          disabled={status === "submitting"}
        />
        {errors.email && <span className="contact-form__error">{errors.email}</span>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          disabled={status === "submitting"}
        />
        {errors.message && <span className="contact-form__error">{errors.message}</span>}
      </div>

      <button type="submit" className="btn contact-form__submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="contact-form__status contact-form__status--success">
          Message sent — I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="contact-form__status contact-form__status--error">
          Something went wrong. Try again, or email me directly.
        </p>
      )}
    </form>
  );
}
