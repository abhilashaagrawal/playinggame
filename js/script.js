

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
    let l_pinky=document.querySelector('.l_pinky');
    let l_ring=document.querySelector('.l_ring');
    let l_middle=document.querySelector('.l_middle');
    let l_index=document.querySelector('.l_index');
    let l_thumb=document.querySelector('.l_thumb');
    let r_thumb=document.querySelector('.r_thumb');
    let r_index=document.querySelector('.r_index');
    let r_middle=document.querySelector('.r_middle');
    let r_ring=document.querySelector('.r_ring');
    let r_pinky=document.querySelector('.r_pinky');

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

    //keypress sound play
    document.addEventListener('keypress',(e)=>{
       // console.log('okk');
       console.log(e.keyCode);
       if(e.keyCode==97){
        let a=document.querySelector('.a_a').classList.add('a_active');
        console.log(a);
        l_pinky.style.display='block';
       }
       if(e.keyCode==113){
        let a=document.querySelector('.a_q').classList.add('a_active');
        console.log(a);
        l_pinky.style.display='block';
       }
       if(e.keyCode==122){
        let a=document.querySelector('.a_z').classList.add('a_active');
        console.log(a);
        l_pinky.style.display='block';
       }
       if(e.keyCode==119){
        let a=document.querySelector('.a_w').classList.add('a_active');
        console.log(a);
        l_ring.style.display='block';
       }
       if(e.keyCode==115){
        let a=document.querySelector('.a_s').classList.add('a_active');
        console.log(a);
        l_ring.style.display='block';
       }
       if(e.keyCode==120){
        let a=document.querySelector('.a_x').classList.add('a_active');
        console.log(a);
        l_ring.style.display='block';
       }
       if(e.keyCode==101){
        let a=document.querySelector('.a_e').classList.add('a_active');
        console.log(a);
        l_middle.style.display='block';
       }
       if(e.keyCode==100){
        let a=document.querySelector('.a_d').classList.add('a_active');
        console.log(a);
        l_middle.style.display='block';
       }
       if(e.keyCode==99){
        let a=document.querySelector('.a_c').classList.add('a_active');
        console.log(a);
        l_middle.style.display='block';
       }
     
       playSound();
    
    });
    document.addEventListener('keyup',(e)=>{
        console.log(e);
        var elements=document.getElementsByClassName('a_active');
        for(var i=0;i<elements.length;i++){
            elements[i].classList.remove('a_active');
        }
        var elements=document.getElementsByClassName('a_leftpinky');
        for (var i=0;i<elements.length;i++)
        {
            elements[i].style.display="none";
        }
      //  document.querySelector('.a_leftpinky').style.display='none';
    });
})();