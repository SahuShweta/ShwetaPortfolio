import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto px-4 max-w-2xl text-center">
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    I'm currently looking for internship opportunities/jobs.
                    Feel free to reach out using the details below.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                    {/* Email */}
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Email</span>
                        <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                            your.email@example.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Phone</span>
                        <span className="text-gray-700 dark:text-gray-300">
                            +91 98765 43210
                        </span>
                    </div>
                </div>

                <div className="mt-10 flex justify-center gap-6">
                    <a
                        href="https://linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition-colors font-medium"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
