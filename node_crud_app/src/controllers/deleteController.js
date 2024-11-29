const userService = require("../services/deleteService");

exports.deleteUser = async (req, res) => {
    const { id } = req.params;  // Extract user id from the request parameters

    try {
        // Call the deleteUserById service to delete the user from the database
        const result = await userService.deleteUserById(id);
        
        if (result) {
            // If user is found and deleted, return a success response
            return res.status(200).json({ message: "User deleted successfully" });
        } else {
            // If user not found, return a 404 error
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error deleting user:", error.message);
        // If an error occurs, return a 500 server error response
        res.status(500).json({ message: "Internal server error" });
    }
};
