function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            I am a highly skilled Fullstack Engineer with 2+ years of experience
            having worked as Fullstack dev and having real-world experience in
            Devops, Deployments etc
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/harshiltomar/"
                className="hover:text-white transition-colors duration-300"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="mailto:harshiltomar20@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                href="https://github.com/harshiltomar"
                className="hover:text-white transition-colors duration-300"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1wNJ1J0mZ60GplJ7_qzP0oCkbC4fnz9RV/view"
                className="hover:text-white transition-colors duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/harshiltomar/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            <a
              href="https://twitter.com/home"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="https://github.com/harshiltomar"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>New Delhi, India</p>
          <p>Delhi 110096</p>
          <p>Email: harshiltomar20@gmail.com</p>
        </div>
      </div>
      <p className="text-center text-lg pt-8 font-semibold text-white">
        ⚡© Harshil Tomar™ ⚡
      </p>
    </footer>
  );
}

export default Footer;
