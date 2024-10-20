import React, {useState, useEffect} from "react";
import {Alert, CircularProgress} from "@mui/material";
import userService from "../../services/UserService";

export default function CardSettings() {
    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        planType: "",
        maxDatabases: 0,
    });
    const [loading, setLoading] = useState(true);

    const fetchUserInfo = async () => {
        try {
            setLoading(true);
            const data = await userService.fetchUserInfo();

            const fullName = data.payload.name || "";
            const [firstName, lastName = ""] = fullName.split(" ");

            setUserInfo({
                username: data.payload.username,
                email: data.payload.email,
                firstName: firstName,
                lastName: lastName,
             //   planType: data.payload.plan_type,
                maxDatabases: data.payload.max_databases,
            });
        } catch (error) {
            console.error("Error fetching user info", error);
        } finally {
            setLoading(false);
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
                        <h6 className="text-blueGray-700 text-xl font-bold">My Account</h6>
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
                            {loading ? (
                                <div className="w-full text-center py-4">
                                    <CircularProgress/>
                                </div>
                            ) : (
                                <>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-username">
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
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-email">
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
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-firstname">
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
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-lastname">
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
                                </>
                            )}
                        </div>

                        {/* Conditional message based on plan type */}
                        {/*{userInfo.planType === "FREE" && (*/}
                        <div className="px-4 py-3">
                            <Alert severity="info">
                                You are currently using the **trial version** of the system. After the 3-month trial
                                period, you
                                will be asked to subscribe to our **Premium Plan** if you need more than **2
                                databases**, which
                                is the limit for the **Free Plan**.
                                We are continuously improving the system to enhance your experience. If you decide to
                                upgrade,
                                you'll unlock more features like **unlimited databases**, **priority support**, and
                                **advanced
                                monitoring**.
                            </Alert>
                        </div>
                        {/*)}*/}

                        <hr className="mt-6 border-b-1 border-blueGray-300"/>
                    </form>
                </div>
            </div>
        </>
    );
}
