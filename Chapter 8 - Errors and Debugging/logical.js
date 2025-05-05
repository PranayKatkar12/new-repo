
const logicalError = () => {
    let a = 5;
    if(a = 10){
        console.log('a is equal to 10')
    }else{
        console.log('a is not equal to 10')
    }

    let realName = "Pranay";

    if(realName = "Katkar"){
        console.log('my real name is katkar');
    }else{
        console.log('my real name is Pranay');
    }
}

module.exports = logicalError;

