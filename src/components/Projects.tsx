import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Student Management System",
            problem: "Reduced manual errors by moving paper records to a digital database.",
            techStack: ["Python", "MySQL", "SQL Connector"],
            implementation: [
                "Designed a MySQL schema to store student and course data efficiently.",
                "Wrote raw SQL queries to Create, Read, Update, and Delete records.",
                "Built Python scripts to connect the interface with the database backend.",
                "Implemented basic authentication to restrict access to admin users."
            ],
            githubLink: "https://github.com/yourusername/student-management-system"
        },
        {
            title: "Portfolio Website",
            problem: "Created a central professional hub to showcase my skills and resume.",
            techStack: ["Next.js", "React", "Tailwind CSS"],
            implementation: [
                "Structured the application using Next.js App Router for better organization.",
                "Built reusable React components for Projects, Skills, and Contact sections.",
                "Used Tailwind CSS to ensure the site looks good on mobile and desktop.",
                "Deployed the live application for public access."
            ],
            githubLink: "https://github.com/yourusername/portfolio"
        }
    ];

    return (
        <section id="projects" className="py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 border-b pb-2 border-gray-200 dark:border-gray-700">Academic Projects</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col h-full">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                                    Problem: {project.problem}
                                </p>
                            </div>

                            <div className="mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-500">Tech Stack:</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6 flex-grow">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-500">What I Implemented:</span>
                                <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                                    {project.implementation.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-auto"
                            >
                                View on GitHub &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
