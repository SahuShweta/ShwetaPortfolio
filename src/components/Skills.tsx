import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            category: "Languages",
            items: ["C++", "Python", "Java (Basic)", "JavaScript"]
        },
        {
            category: "Web Technologies",
            items: ["HTML5", "CSS3", "React.js", "Next.js (Basic)", "Tailwind CSS"]
        },
        {
            category: "Databases",
            items: ["MySQL", "MongoDB"]
        },
        {
            category: "Core CS Concepts",
            items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"]
        },
        {
            category: "Tools",
            items: ["Git & GitHub", "VS Code", "Postman"]
        }
    ];

    return (
        <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 border-b pb-2 border-gray-200 dark:border-gray-700">Please Checkout My Skills</h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((group, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">
                                {group.category}
                            </h3>
                            <ul className="space-y-2">
                                {group.items.map((skill, i) => (
                                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
