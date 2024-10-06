import React from "react";
import {Link} from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
    return (
        <>
            <Navbar transparent/>
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1653669487003-7d89b2020f3c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        }}
                    >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-black"
            ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Your story starts with us.
                                    </h1>
                                    <p className="mt-4 text-lg text-blueGray-200">
                                        This is a robust cloud solution designed for modern businesses. Build and scale
                                        your applications with ease using our database platform, featuring
                                        high-performance cloud infrastructure and a variety of tools powered by the
                                        latest in data management technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{transform: "translateZ(0)"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <section className="pb-20 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div
                                            className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-shield-alt"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Secure Data Storage</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Ensure your data is encrypted and securely stored in our high-performance
                                            cloud environment, with protection against unauthorized access.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div
                                            className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-server"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Scalable Infrastructure</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Easily scale your database as your business grows, from handling small
                                            datasets to large volumes of traffic without any interruptions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div
                                            className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-headset"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">24/7 Support</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Our team of experts is available 24/7 to assist you with any issues or
                                            questions you may have. Your data is always in safe hands.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div
                                    className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-cloud text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Experience Cloud Performance at Its Best
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Enjoy the convenience of managing your database in the cloud with a system built for
                                    performance, reliability, and ease of use.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Our platform allows you to scale effortlessly, ensuring that as your data grows,
                                    your database performs seamlessly.
                                </p>
                                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                                    Explore Our Cloud Solutions!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div
                                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="..."
                                        src="https://images.unsplash.com/photo-1573496358488-51c188554a47?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="w-full align-middle rounded-t-lg"
                                    />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block h-95-px -top-94-px"
                                        >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="text-lightBlue-500 fill-current"
                                            ></polygon>
                                        </svg>
                                        <h4 className="text-xl font-bold text-white">
                                            Best-in-Class Cloud Services
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Our cloud infrastructure is designed to deliver high-speed performance, with
                                            guaranteed uptime and a focus on data security.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{transform: "translateZ(0)"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="Database Cloud Infrastructure"
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div
                                        className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                                        <i className="fas fa-database text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold">High-Performance Cloud Database</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                        Our cloud database infrastructure is designed to handle high-performance
                                        operations with minimal latency. Experience reliability, speed, and scalability.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                    <span
                                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        End-to-End Data Security
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                    <span
                                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                        <i className="fas fa-sync-alt"></i>
                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        Seamless Data Synchronization
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                    <span
                                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                        <i className="fas fa-chart-line"></i>
                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        Scalable Infrastructure
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-20 relative block bg-blueGray-800">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{transform: "translateZ(0)"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-800 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold text-white">
                                    Cloud Database Solutions
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                                    Our cloud platform provides secure, scalable, and high-performance databases,
                                    tailored to your business needs. Experience a seamless integration and grow with
                                    confidence.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-shield-alt text-xl"></i>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    Secure Services
                                </h6>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Our cloud databases are built with state-of-the-art security, ensuring that your
                                    data is safe and accessible whenever you need it.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-chart-line text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Scale Effortlessly
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Scale your data infrastructure as your business grows without interruption,
                                    supporting even the most demanding workloads.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div
                                    className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-rocket text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Fast Deployment
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Launch your databases quickly and efficiently, so you can focus on your core business without worrying about setup or downtime.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div
                                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl font-semibold">
                                            Want to work with us?
                                        </h4>
                                        <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                            Complete this form and we will get back to you in 24
                                            hours.
                                        </p>
                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="full-name"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Full Name"
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="message"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                rows="4"
                                                cols="80"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Type a message..."
                                            />
                                        </div>
                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
