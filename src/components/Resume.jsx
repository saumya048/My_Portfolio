import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Saumya Srivastava</h1>
          <p className="text-gray-600">React Developer</p>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Contact</h2>
          <p>Email: saumya33322@gmail.com</p>
          <p>Phone: 9335474068</p>
          <p>Location: Noida,Delhi</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Experience</h2>
          <div className="mt-2">
            <h3 className="font-bold">React Native Developer - Vibrant It solutions Pvt Ltd</h3>
            <p className="text-gray-600">DEC2023 - DEC2024</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed user-friendly React applications.</li>
              <li>Optimized performance and accessibility.</li>
              <li>Collaborated with backend developers.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Internship</h2>
          <div className="mt-2">
            <h3 className="font-bold">Internship on mern stack - Digicoders Technologies Pvt Ltd </h3>
            <p className="text-gray-600">MARCH2023 - NOV2024</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed user-friendly React applications.</li>
              <li>Optimized performance and accessibility.</li>
              <li>Collaborated with backend developers.</li>
            </ul>
          </div>
        </section>


        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Education</h2>
          <p><strong>Diploma in Computer Science</strong></p>
          <p className="text-gray-600">Government Polytechnic Aurai - 2020 - 2023</p>

          <p><strong>Intermediate</strong></p>
          <p className="text-gray-600">Navodaya Vidya Mandir (CBSE)</p>

          <p><strong>High School</strong></p>
          <p className="text-gray-600">Boonmax Convent School (CBSE)</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>React.js</li>
            <li>React Native</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Redux</li>
            <li>Firebase</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
