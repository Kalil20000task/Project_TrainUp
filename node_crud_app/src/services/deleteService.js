const User = require("../model/user"); // Assuming you have a User model

exports.deleteUserById = async (id) => {
    try {
        // Use Mongoose's `findByIdAndDelete` method to find and delete the user
        const result = await User.findByIdAndDelete(id);
        return result; // If the user is found and deleted, return the user document
    } catch (error) {
        // If there is an error interacting with the database, throw an error
        throw new Error(error.message);
    }
};
