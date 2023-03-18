//jshint esversion:6

//move the function in a separate module 
//module.exports.getDate = getDate; //no parenthese because we don't want to call the function. It will not run the function
module.exports.getDate = function (){
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);

}


module.exports.getDay = getDay;
function getDay(){
    const today = new Date();
    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);

}

console.log(module.exports)