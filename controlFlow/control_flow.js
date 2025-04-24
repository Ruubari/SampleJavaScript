let userRole = "admin";
let acccessLevel;
let isLoggingIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = false;



let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";


if (userRole === "admin") {
    acccessLevel = "Full access granted";
} else if (userRole === "manager") {
    acccessLevel = "Limitted access granted";
} else {
    acccessLevel = "No access granted";
}

if (isLoggingIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin";
    } else {
        userMessage = "Welcome, user!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

switch (userType) {
    case "admin":
        userCategory = "Adminstrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}



console.log("Access Level:", acccessLevel);
console.log("User Message:", userMessage);
console.log("User Category", userCategory);
console.log("Authentication Status:", authenticationStatus);
