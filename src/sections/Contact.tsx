const Contact = () => {
  return (
    <section
      className="flex justify-center items-center min-h-screen px-4"
      id="contact"
    >
      <div className="w-full max-w-xl">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">Contact</h2>

        <p className="text-gray-700 mb-8 text-center md:text-left">
          Interested in working together or have a question? Feel free to reach
          out!
        </p>

        <ul className="space-y-4 text-gray-700 text-base">
          <li>
            <span className="font-semibold">📧 Email:</span>{" "}
            <a
              href="mailto:shubhambrown1@gmail.com"
              className="text-blue-600 underline"
            >
              shubhambrown1@gmail.com
            </a>
          </li>

          <li>
            <span className="font-semibold">📍 Location:</span> Delhi, India
          </li>

          <li>
            <span className="font-semibold">🐱 GitHub:</span>{" "}
            <a
              href="https://github.com/JVKE001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              github.com/jvke001
            </a>
          </li>

          <li>
            <span className="font-semibold">💼 LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/jvke001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              linkedin.com/in/jvke001
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
