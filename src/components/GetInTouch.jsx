import GITTitles from "./Titles/GITTitles";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";

export default function GetInTouch() {
  const [state, handleSubmit] = useForm("xpzbjryg");

  if (state.succeeded) {
    Swal.fire("Thank you for contacting me!", "I will write to you soon!", "success");
    form.reset();
  }

  return (
    <>
      <section className="GIT-container" id="GIT">
        <GITTitles />

        <div className="GIT-card">
          <div className="form-container">
            <p className="form-title">Send me a message!</p>
            <form action="https://formspree.io/f/xpzbjryg" onSubmit={handleSubmit} method="POST" id="form">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">Email</label>
              <input name="Email" id="email" type="email" />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="20" rows="10"></textarea>
              <button type="submit" disabled={state.submitting}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
