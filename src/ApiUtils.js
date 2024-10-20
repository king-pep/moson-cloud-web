// ApiUtils.js

export const handleResponse = async (response) => {
    if (response.status === 401) {
        alert("Your session has expired. Please log in again.");
        logoutUser();
        throw new Error("Session expired.");
    } else if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
        return response.json();
    }
};


export const logoutUser = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login";
};
