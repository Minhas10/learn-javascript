let username=true;
const password=true;
const admin=true;
const user=false;
if(username&&password){
    console.log("Login successful")
    // if(admin){
    //     console.log('Admin Dashboard')
    // }
    // else if(user){
    //     console.log('User login ');
    // }
    console.log(admin? "Admin Dashboard":"User Dashboard")
    // console.log(user? "User Dashboard":"Admin Dashboard")
}
else{
    console.log('username or password invalid');
}
