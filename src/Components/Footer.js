import "./Styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer_S">
        <section className="S_community">
          <span>Resources:</span>

          <a href="/" target="_blank" rel="noreferrer" className="footer_S_a">
            home
          </a>
        </section>

        <section className="S_community">
          <span>Community:</span>
          <a
            href="/contact-us"
            target="_blank"
            rel="noreferrer"
            className="footer_S_a"
          >
            contact us
          </a>
          <span>terms & conditions</span>
          <span>privacy</span>
        </section>

        <section className="S_community">
          for issues contact:
          <span>abedshaaban600@gmail.com</span>
        </section>
      </section>
    </footer>
  );
};
