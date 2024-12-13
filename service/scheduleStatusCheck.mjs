import fetch from "node-fetch";
const scheduleStatusCheck = async () => {
    await fetch("http://localhost:5004/StatusCheck/Inprogress")
        .then((res) => {
            console.log("The status is updated successfully");
        })
        .catch((err) => {
            console.log("The status update is failed", err);
        });
};

scheduleStatusCheck();  // will call the route for changing status of request from inprogress to fail even the request is created beyond 24hrs.
