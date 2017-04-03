/*
 * Callback functions allow you to execute code after a particular process has completed.
 * For instance, in this example, we create a function called getUser, that takes in the id of the user
 * and a callback function
 * You can read more about callback functions here:
 *  Resource: https://www.quora.com/What-is-a-callback-in-programming
 */

let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Swan'
    };
    /*
     * Here, we create an artificial delay for 2 seconds to represent how real-world asynchronous programming 
     * will look like. After creating the user object, we pass it into the callback, so we now have access to it
     * when writing the callback.
     */
    setTimeout(() => {
        callback(user);
    }, 3000);
};


/*
 * Here, we're calling the function, passing in 29 for the id, and a callback function where userObject is the user
 * that was passed into callback(); 
 * ONLY until callback() is executed, will we be able to console.log userObject.
 * Remember, there's an artifical delay, so only after we actually get the user, will we be able to execute code afterwards.
 */
getUser(29, (userObject) => {
    console.log(userObject);
});