

let saveRegInfo=()=>{
    let fn=document.getElementById('First_name').value;
    let ln=document.getElementById('Last_name').value;
    console.log(fn);
    console.log(ln);
    window.localStorage.setItem('First_name',fn);
    window.localStorage.setItem('Last_name',ln);
    window.location.reload();
}
let logOut=()=>{
    //console.log('okkk');
    window.localStorage.clear();
    window.location.reload();
}
let playSound=()=>{
    //console.log('okkk');
    let at=document.querySelector('.a_audio');
   // console.log(at);
    at.play();
}
//()();
(()=>{
    let fn=window.localStorage.getItem('First_name');
    let ln=window.localStorage.getItem('Last_name');

    //console.log('Page loaded Successfully');
    
    // Get a reference to the modal element
    var modal=document.getElementById('registrationModal');

    // create a bootstrap modal instance using the modal element
    var modalInstance= new bootstrap.Modal(modal);
    if((fn===null)&&(ln===null)){
        //call the `show` method on the modal instance to launch the modal
        modalInstance.show();
        
    }
    if(fn!==null){
        document.querySelector('.a_welcome').innerHTML='Welcome '+fn +" "+ln +'<button class="btn btn-sm ms-3 bg-danger text-white" onclick="logOut()">Log Out</button>';
    }
})();