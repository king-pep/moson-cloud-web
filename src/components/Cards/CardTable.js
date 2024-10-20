import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Modal, Box, Button, Typography, TextField, Select, MenuItem, Alert} from "@mui/material";
import databaseService from "../../services/DatabaseService";
import userService from "../../services/UserService";

export default function CardTable({color}) {
    const [databases, setDatabases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showConnectionModal, setShowConnectionModal] = useState(false);
    const [newDatabase, setNewDatabase] = useState({
        database_name: "", database_type: "mysql",
    });
    const [selectedDatabase, setSelectedDatabase] = useState(null);
    const [showConnectionString, setShowConnectionString] = useState(false);

    const fetchDatabases = async () => {
        try {
            const data = await databaseService.fetchDatabases();
            if (data.resultCode === 0) {
                setDatabases(data.payload || []);
                setErrorMessage(null);
                setSuccessMessage("Databases fetched successfully.");
            } else {
                setErrorMessage(data.friendlyCustomerMessage || "An error occurred while fetching databases.");
                setDatabases([]);
            }
        } catch (error) {
            setErrorMessage("Network error occurred while fetching databases.");
            console.error("Network error:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchUserInfo = async () => {
        try {
            const data = await userService.fetchUserInfo();
            console.log("User Info:", data);
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    };

    const handleStopDatabase = async (db) => {
        try {
            const data = await databaseService.stopDatabase(db.container_name);
            if (data.resultCode === 0) {
                await fetchDatabases();
                setErrorMessage(null);
                setSuccessMessage("Database stopped successfully.");
            } else {
                setErrorMessage(data.friendlyCustomerMessage || "Failed to stop the database.");
            }
        } catch (error) {
            setErrorMessage("Network error occurred while stopping the database.");
            console.error("Network error:", error);
        }
    };

    const handleRestartDatabase = async (db) => {
        try {
            const data = await databaseService.restartDatabase(db.container_name);
            if (data.resultCode === 0) {
                await fetchDatabases();
                setErrorMessage(null);
                setSuccessMessage("Database restarted successfully.");
            } else {
                setErrorMessage(data.friendlyCustomerMessage || "Failed to restart the database.");
            }
        } catch (error) {
            setErrorMessage("Network error occurred while restarting the database.");
            console.error("Network error:", error);
        }
    };

    const handleDeleteDatabase = async (db) => {
        try {
            const data = await databaseService.deleteDatabase(db.container_name);
            if (data.resultCode === 0) {
                await fetchDatabases();
                setErrorMessage(null);
                setSuccessMessage("Database deleted successfully.");
            } else {
                setErrorMessage(data.friendlyCustomerMessage || "Failed to delete the database.");
            }
        } catch (error) {
            setErrorMessage("Network error occurred while deleting the database.");
            console.error("Network error:", error);
        }
    };


    const createDatabase = async () => {
        try {
            const data = await databaseService.createDatabase(newDatabase);
            if (data.resultCode === 0) {
                await fetchDatabases();
                setShowModal(false);
                setErrorMessage(null);
                setSuccessMessage("Database created successfully.");
            } else {
                setErrorMessage(data.friendlyCustomerMessage || "An error occurred while creating the database.");
            }
        } catch (error) {
            setErrorMessage("Network error occurred while creating the database.");
            console.error("Network error:", error);
        }
    };

    const handleConnectClick = (db) => {
        setSelectedDatabase(db);
        setShowConnectionString(false);
        setShowConnectionModal(true);
    };

    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage(null);
                setErrorMessage(null);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [successMessage, errorMessage]);
    useEffect(() => {
        fetchDatabases();
        fetchUserInfo();
    }, []);

    return (<>
            <div
                className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ${color === "light" ? "bg-white" : "bg-lightBlue-900 text-white"}`}>
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className={`font-semibold text-lg ${color === "light" ? "text-blueGray-700" : "text-white"}`}>
                                User Databases
                            </h3>
                        </div>
                        <Button variant="contained" color="primary" onClick={() => setShowModal(true)}>
                            Create Database
                        </Button>
                    </div>
                </div>
                {/* Free Plan Suspension Message */}
                <div className="px-4 py-3">
                    <Alert severity="info">
                        As a free plan user, your database will be suspended after 7 days of inactivity.
                        Please restart it to resume usage.
                    </Alert>
                </div>
                <div className="block w-full overflow-x-auto">
                    {errorMessage && (<Alert severity="error" sx={{my: 2}}>
                            {errorMessage}
                        </Alert>)}
                    {successMessage && (<Alert severity="success" sx={{my: 2}}>
                            {successMessage}
                        </Alert>)}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 border-b text-left">Database Name</th>
                            <th className="px-6 py-3 border-b text-left">Database Type</th>
                            <th className="px-6 py-3 border-b text-left">Status</th>
                            <th className="px-6 py-3 border-b text-left">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {loading ? (<tr>
                                <td colSpan="4" className="text-center py-4">Loading...</td>
                            </tr>) : databases.length > 0 ? (databases.map((db, index) => (<tr key={index}>
                                    <td className="px-6 py-4 border-t text-left">{db.database_name}</td>
                                    <td className="px-6 py-4 border-t text-left">{db.database_type}</td>
                                    <td className="px-6 py-4 border-t text-left">{db.container_status}</td>
                                    <td className="px-6 py-4 border-t text-left">
                                        <Button variant="contained" color="primary"
                                                onClick={() => handleConnectClick(db)}>
                                            Connect
                                        </Button>
                                        {db.container_status === "running" ? (
                                            <Button variant="contained" color="secondary" sx={{ml: 2}}
                                                    onClick={() => handleStopDatabase(db)}>
                                                Stop
                                            </Button>) : (<Button variant="contained" color="success" sx={{ml: 2}}
                                                                  onClick={() => handleRestartDatabase(db)}>
                                                Restart
                                            </Button>)}
                                        <Button variant="contained" color="error" sx={{ml: 2}}
                                                onClick={() => handleDeleteDatabase(db)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>))) : (<tr>
                                <td colSpan="4" className="text-center py-4">No databases found for this user.</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal open={showConnectionModal} onClose={() => setShowConnectionModal(false)}>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 24,
                        maxWidth: '80%',
                        minWidth: 400,
                        mx: 'auto',
                        mt: '20vh',
                        overflow: 'auto',
                    }}
                >
                    <Typography variant="h6" component="h2">Database Connection</Typography>
                    {selectedDatabase && (<Typography variant="body1" sx={{mt: 2, wordBreak: 'break-all'}}>
                            Connection String: {showConnectionString ? (<span>
                                <span style={{color: '#FF5722'}}>{selectedDatabase.database_type}://</span>
                                <span style={{color: '#3F51B5'}}>{selectedDatabase.username}</span>
                                <span style={{color: '#F44336'}}>:{selectedDatabase.password}</span>
                                <span style={{color: '#FF5722'}}>@</span>
                                <span style={{color: '#4CAF50'}}>{selectedDatabase.host}</span>
                                <span style={{color: '#FF9800'}}>: {selectedDatabase.port}</span>
                                <span style={{color: '#9C27B0'}}>/</span>
                                <span style={{color: '#3F51B5'}}>{selectedDatabase.database_name}</span>
                            </span>) : "************"}
                        </Typography>)}
                    <Button variant="outlined" sx={{mt: 2}}
                            onClick={() => setShowConnectionString(!showConnectionString)}>
                        {showConnectionString ? "Hide Connection String" : "Show Connection String"}
                    </Button>
                </Box>
            </Modal>

            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <Box sx={{
                    bgcolor: 'background.paper',
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 24,
                    maxWidth: 500,
                    mx: 'auto',
                    mt: '20vh'
                }}>
                    <Typography variant="h6" component="h2">Create New Database</Typography>
                    <TextField
                        fullWidth
                        label="Database Name"
                        variant="outlined"
                        margin="normal"
                        value={newDatabase.database_name}
                        onChange={(e) => setNewDatabase({...newDatabase, database_name: e.target.value})}
                    />
                    <Select
                        fullWidth
                        value={newDatabase.database_type}
                        onChange={(e) => setNewDatabase({...newDatabase, database_type: e.target.value})}
                        variant="outlined"
                        margin="normal"
                    >
                        <MenuItem value="mysql">MySQL</MenuItem>
                        <MenuItem value="postgres">PostgreSQL</MenuItem>
                        <MenuItem value="mongodb">MongoDB</MenuItem>
                    </Select>
                    <Button variant="contained" color="primary" sx={{mt: 2}} onClick={createDatabase}>
                        Create Database
                    </Button>
                    <Button variant="text" sx={{mt: 2}} onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                </Box>
            </Modal>
        </>);
}

CardTable.defaultProps = {
    color: "light",
};

CardTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
