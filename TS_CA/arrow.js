var newlog2 = function (pwd, lnth) {
    if (pwd.length < lnth)
        console.log("Invalid password due to less number of characters ");
    else
        console.log("You Password is strong and acceptable");
    console.log("Your password: " + pwd + "  is:  " + pwd.length + "  characters long;");
};
//newlog2("Heyyyyy",5);
newlog2("Heyyyyyyyy", 9);
