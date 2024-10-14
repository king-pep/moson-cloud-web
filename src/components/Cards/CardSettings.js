import React, {useState, useEffect} from "react";
import axios from "axios";

export default function CardSettings() {
    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
        aboutMe: "",
    });

    const fetchUserInfo = async () => {
        try {
            const token = localStorage.getItem("access_token"); // Assuming you're storing the token in localStorage
            const response = await axios.get("https://api-dev.mosontech.co.za/api/v1/infra/user/userinfo", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = response.data.payload; // Assuming your payload structure
            const fullName = data.name || ""; // Get full name from the response

            // Split the full name into first and last name (if possible)
            const [firstName, lastName = ""] = fullName.split(" ");

            setUserInfo({
                username: data.username,
                email: data.email,
                firstName: firstName,
                lastName: lastName,
                address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09", // Default value; replace with actual data if available
                city: "New York", // Default value; replace with actual data if available
                country: "United States", // Default value; replace with actual data if available
                postalCode: "Postal Code", // Default value; replace with actual data if available
                aboutMe: "A beautiful UI Kit and Admin for React & Tailwind CSS.", // Default value; replace with actual data if available
            });
        } catch (error) {
            console.error("Error fetching user info", error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <>
            <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
                        <button
                            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                        >
                            Settings
                        </button>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-username"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={userInfo.username}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-email"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={userInfo.email}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-firstname"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={userInfo.firstName}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-lastname"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={userInfo.lastName}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300"/>


                    </form>
                </div>
            </div>
        </>
    );
}
