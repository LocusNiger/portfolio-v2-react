import GITTitles from "./Titles/GITTitles";

export default function GetInTouch() {
  return (
    <>
      <section className="GIT-container" id="GIT">
        <GITTitles />

        <div className="GIT-card">
          <div className="form-container">
            <p className="form-title">Send me a message!</p>
            <form action="https://formspree.io/f/xpzbjryg" method="POST" id="form">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
              <label for="email">Email</label>
              <input name="Email" id="email" type="email" />
              <label for="message">Message</label>
              <textarea name="message" id="message" cols="20" rows="10"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
