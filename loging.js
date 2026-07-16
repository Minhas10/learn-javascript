const isLoggedIn=true;
const isAdmin=true;
if(isLoggedIn){
    console.log('Login successful');
    if(isLoggedIn&&isAdmin){
        console.log('Admin Dashboard');
    }
    else{
        console.log('User Dashboard');
    }

}
else{ console.log('Please Login')}