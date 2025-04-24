let organization = "subscriber";
let isAuthorizated;


// if (userRole === "employee") {
//     isAuthorizated = "Dietary Services";
// } else if (userRole === "member") {
//     isAuthorizated = "Dietary Services and one on one interaction with a dietician.";
// }


switch (organization) {
    case "employee":
        isAuthorizated = "Dietary Services";
        console.log("access to:", isAuthorizated);
        break;
    case "member":
        isAuthorizated = "Dietary Services and one on one interaction with a dietician.";
        console.log("access to:", isAuthorizated);
        break;
    case "subscriber":
        isAuthorizated = "partial access to facilitate 'Dietary Services' only.";
        console.log("access to:", isAuthorizated);
        break;
    default:
        console.log("they need to enroll or at least subscribe first to avail this facility.")
}