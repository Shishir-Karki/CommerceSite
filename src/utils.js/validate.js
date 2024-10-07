// Function to validate email and password during sign-in
export const checkValidData = (email, password) => {
    if (!email || !password) return "Email and Password are required.";
    if (password.length < 6) return "Password should be at least 6 characters.";
    return null;
};

// Function to validate sign-up details
export const checkValidDataSignUp = (email, password, name, phonenumber) => {
    if (!email || !password || !name || !phonenumber) return "All fields are required.";
    if (password.length < 6) return "Password should be at least 6 characters.";
    return null;
};
