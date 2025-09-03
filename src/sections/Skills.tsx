const Skills = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center px-4 sm:px-8 md:px-16  text-gray-800"
      id="skills"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-base">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-2">🖥️ Frontend</h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES5/ES6+)</li>
              <li>React.js</li>
              <li>Python</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-2">🧩 Backend</h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>REST APIs</li>
            </ul>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h3 className="text-xl font-semibold mb-2">🛠️ Tools & Platforms</h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>Vite</li>
              <li>Netlify</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-2">💡 Soft Skills</h3>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
