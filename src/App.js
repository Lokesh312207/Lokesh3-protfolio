// import React from "react";
import React, { useState } from "react";
<img src="/assets/profile.jpg" alt="Lokesh Kumar" className="rounded-full w-40 h-40 mb-6 mt-20" />


function Navbar({ darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false); // Auto-close on link click
    };

    return (
        <nav>
            <h1>Lokesh Kumar</h1>
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
                <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                <li>
                    <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
                        {darkMode ? "☀️ Light" : "🌙 Dark"}
                    </button>
                </li>
            </ul>
        </nav>
    );
}


// Footer Component
function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-12">
            <p>&copy; 2025 Lokesh Kumar. All rights reserved.</p>
        </footer>
    );
}

// Pages
function Home() {
    return (
        <section id="home">
            <img
                // src="/lokesh.jpg"
                src={`${process.env.PUBLIC_URL}/lokesh.jpg`}
                alt="Lokesh Profile"
                className="profile-pic"
            />
            <h1>Hello, I'm Lokesh</h1>
            <p>Welcome to my portfolio website!</p>
        </section>
    );
}




function About() {
    return (
        <section id="about" className="py-16 px-6 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
            <p className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300">
                I am Lokesh Kumar, an enthusiastic aspiring developer with a strong interest in web technologies and software engineering. My career objective is to work in a dynamic and challenging environment where I can contribute to innovative projects and continuously improve my skills. I am a quick learner, good communicator, and a team player.
            </p>
        </section>
    );
}

function Education() {
    const educationList = [
        {
            degree: "B.Tech in Computer Science",
            institution: "Sri venkateswara clg of engineering and technology",
            year: "2022 - 2026",
            score: "CGPA: 7.5",
        },
        {
            degree: "Intermediate (MPC)",
            institution: "Narayana Junior College",
            year: "2020 - 2022",
            score: "Percentage: 73%",

        },
        {
            degree: "Secondary School (10th Class)",
            institution: "Sri chaithanya em High School",
            year: "2018 - 2020",
            score: "GPA: 98%",
        },
    ];

    return (
        <section id="education" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-white">Education</h2>
            <div className="max-w-3xl mx-auto relative pl-6 border-l-4 border-blue-500">
                {educationList.map((edu, idx) => (
                    <div key={idx} className="mb-10 relative">
                        <div className="absolute -left-[14px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{edu.degree}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{edu.institution}, {edu.year}</p>
                            <p className="text-gray-700 dark:text-gray-300">{edu.score}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}



function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "React.js", "Git", "GitHub"];

    return (
        <section id="skills" className="py-16 px-6 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-center">Technical Skills</h2>
            <ul className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <li key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}

function Projects() {
    const projectList = [
        {
            title: "Portfolio Website",
            description: "Personal portfolio built using React.js and Tailwind CSS.",
            tech: "React, Tailwind",
            link: "https://github.com/Lokesh312207/portfolio-website",
        },
        {
            title: "Weather App",
            description: "Fetches weather data using an API.",
            tech: "HTML, CSS, JavaScript",
            link: "https://github.com/Lokesh312207/portfolio-website",
        },
    ];

    return (
        <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
            <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2">
                {projectList.map((project, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="mb-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                        <p className="text-sm text-gray-500 mb-2">{project.tech}</p>
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Certifications() {
    return (
        <section id="certifications" className="py-16 px-6 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-center">Certifications</h2>
            <ul className="list-disc max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                <li>React Basics – Coursera</li>
                <li>JavaScript Fundamentals – Udemy</li>
                <li>Git & GitHub – freeCodeCamp</li>
            </ul>
        </section>
    );
}

function Experience() {
    return (
        <section id="experience" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-2xl font-bold mb-4 text-center">Internship / Work Experience</h2>
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-4 rounded shadow">
                <h3 className="text-xl font-semibold">Frontend Intern - NRKS Skill Development Pvt. Ltd.</h3>
                <p className="text-gray-600 dark:text-gray-400">June 2025 - July 2025</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Worked on building a portfolio website using React.js. Learned best practices in UI/UX and code structure.</p>
            </div>
        </section>
    );
}

function Achievements() {
    return (
        <section id="achievements" className="py-16 px-6 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-center">Achievements / Awards</h2>
            <ul className="list-disc max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                <li>Top Performer in Web Development Bootcamp</li>
                <li>Completed 100 Days of Code Challenge</li>
                <li>Hackathon Finalist - CodeSprint 2024</li>
            </ul>
        </section>
    );
}

function Contact() {
    return (
        <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
            <div className="text-center text-gray-700 dark:text-gray-300">
                <p>Email: <a href="mailto:lokeshsomapalli@gmail.com" className="text-blue-500">Gmail</a></p>
                <p>Phone: +91 98765 43210</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/lokesh-somapalli-b529b42ab/" target="_blank" rel="noreferrer" className="text-blue-500">Linkedin</a></p>
                <p>GitHub: <a href="https://github.com/Lokesh312207" target="_blank" rel="noreferrer" className="text-blue-500">Github</a></p>
            </div>
        </section>
    );
}



function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Home />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Experience />
            <Achievements />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;




