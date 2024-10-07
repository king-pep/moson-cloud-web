import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
//import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color }) {
    const [databases, setDatabases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [newDatabase, setNewDatabase] = useState({
        database_name: "",
        database_type: "mysql",
    });

    const [showPasswords, setShowPasswords] = useState({});

    const togglePasswordVisibility = (index) => {
        setShowPasswords((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const fetchDatabases = async () => {
        const token = localStorage.getItem("access_token");
        const url = "http://160.119.250.107:5000/api/v1/infra/databases/list";

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setDatabases(data.databases);
            } else {
                console.error("Error fetching databases:", response.statusText);
            }
        } catch (error) {
            console.error("Network error:", error);
        } finally {
            setLoading(false);
        }
    };

    // Function to create a new database
    const createDatabase = async () => {
        const token = localStorage.getItem("access_token");
        const url = "http://160.119.250.107:5000/api/v1/infra/containers/create";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newDatabase),
            });

            if (response.ok) {
                await fetchDatabases();
                setShowModal(false);
            } else {
                console.error("Error creating database:", response.statusText);
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    useEffect(() => {
        fetchDatabases();
    }, []);

    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                User Databases
                            </h3>
                        </div>
                        <button
                            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            Create Database
                        </button>
                    </div>
                </div>

                <div className="block w-full overflow-x-auto">
                    {/* Database table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 border-b text-left">Container Name</th>
                            <th className="px-6 py-3 border-b text-left">Database Name</th>
                            <th className="px-6 py-3 border-b text-left">Database Type</th>
                            <th className="px-6 py-3 border-b text-left">Username</th>
                            <th className="px-6 py-3 border-b text-left">Port</th>
                            <th className="px-6 py-3 border-b text-left">Password</th>
                        </tr>
                        </thead>
                        <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="text-center py-4">Loading...</td>
                            </tr>
                        ) : databases.length > 0 ? (
                            databases.map((db, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 border-t text-left">{db.container_name}</td>
                                    <td className="px-6 py-4 border-t text-left">{db.database_name}</td>
                                    <td className="px-6 py-4 border-t text-left">{db.database_type}</td>
                                    <td className="px-6 py-4 border-t text-left">{db.username}</td>
                                    <td className="px-6 py-4 border-t text-left">{db.port}</td>
                                    <td className="px-6 py-4 border-t text-left">
                                        {showPasswords[index] ? (
                                            <>
                                                {db.password}
                                                <button
                                                    className="ml-2 text-blue-500 hover:underline"
                                                    onClick={() => togglePasswordVisibility(index)}
                                                >
                                                    Hide
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                ****
                                                <button
                                                    className="ml-2 text-blue-500 hover:underline"
                                                    onClick={() => togglePasswordVisibility(index)}
                                                >
                                                    Show
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">No databases found for this user.</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for creating a new database */}
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">Create New Database</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <input
                                        type="text"
                                        placeholder="Database Name"
                                        className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newDatabase.database_name}
                                        onChange={(e) => setNewDatabase({ ...newDatabase, database_name: e.target.value })}
                                    />
                                    <select
                                        className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={newDatabase.database_type}
                                        onChange={(e) => setNewDatabase({ ...newDatabase, database_type: e.target.value })}
                                    >
                                        <option value="mysql">MySQL</option>
                                        <option value="postgres">PostgreSQL</option>
                                        <option value="mongodb">MongoDB</option>
                                    </select>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={createDatabase}
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

CardTable.defaultProps = {
    color: "light",
};

CardTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
