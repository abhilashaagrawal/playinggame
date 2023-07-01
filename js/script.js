

let saveRegInfo=()=>{
    let fn=document.getElementById('First_name').value;
    let ln=document.getElementById('Last_name').value;
    let dur=document.querySelector('.a_myselect').value;
    console.log(fn);
    console.log(ln);
    window.localStorage.setItem('First_name',fn);
    window.localStorage.setItem('Last_name',ln);
    window.localStorage.setItem('Duration',dur);
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
let start=()=>{
    //set the date we are counting down to 
   // built in function
   var nextTime=new Date().getTime();
   nextTime=new Date(nextTime+(localStorage.getItem('Duration')*60*1000));
   //create a new date object with the specified date time
   const datetime=new Date(nextTime);
   // Convert to Unix timestamp
   const unixTimestamp = Math.floor(nextTime.getTime() / 1000)*1000;
  // console.log(unixTimestamp);
   setInterval(function(){
    var now=new Date().getTime();
    console.log('Next Time',unixTimestamp);
    console.log('Current Time',now);
    // Find the distance between now and the count down date
    var distance = unixTimestamp - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.querySelector(".a_duration").innerHTML = minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".a_duration").innerHTML = "EXPIRED";
    }

   },1000)

}
//()();
(()=>{
    
   let story=`When a lion was resting in the jungle, a mouse began racing up and down his body for amusement. The lion’s sleep was interrupted, and he awoke enraged. The lion was going to eat the mouse when the mouse begged him to let him go. “I assure you, if you save me, I will be of immense help to you in the future.” The lion laughed at the mouse’s self-assurance and freed him.A group of hunters arrived in the forest one day and captured the lion. They had him tied to a tree. The lion began to roar as he struggled to get out. Soon, the mouse passed by and spotted the lion in distress. He dashed off, biting on the ropes to free the lion, and the two hurried off into the woods.`;
   let words=story.split(' ');
   
   //console.log(words);
   let x=words.slice(0,23).join(' ');
  // console.log(words.slice(0,20).join());
   document.querySelector('.a_typingcontent').innerHTML=x;

   console.log(story.length);
   var perTwoLineCharCount=110;
   var totalIteration=Math.ceil(story.length/perTwoLineCharCount);
   console.log(totalIteration);

    var initialSequence=1;
    var currentCharacterPosition=0;
    let totalCCLoc=0;
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
        //console.log(a);
        l_pinky.style.display='block';
       }
       if(e.keyCode==113){
        let a=document.querySelector('.a_q').classList.add('a_active');
        //console.log(a);
        l_pinky.style.display='block';
       }
       if(e.keyCode==122){
        let a=document.querySelector('.a_z').classList.add('a_active');
        //console.log(a);
        l_pinky.style.display='block';
       }
       if(e.keyCode==119){
        let a=document.querySelector('.a_w').classList.add('a_active');
        //console.log(a);
        l_ring.style.display='block';
       }
       if(e.keyCode==115){
        let a=document.querySelector('.a_s').classList.add('a_active');
        //console.log(a);
        l_ring.style.display='block';
       }
       if(e.keyCode==120){
        let a=document.querySelector('.a_x').classList.add('a_active');
        //console.log(a);
        l_ring.style.display='block';
       }
       if(e.keyCode==101){
        let a=document.querySelector('.a_e').classList.add('a_active');
        //console.log(a);
        l_middle.style.display='block';
       }
       if(e.keyCode==100){
        let a=document.querySelector('.a_d').classList.add('a_active');
        //console.log(a);
        l_middle.style.display='block';
       }
       if(e.keyCode==99){
        let a=document.querySelector('.a_c').classList.add('a_active');
        //console.log(a);
        l_middle.style.display='block';
       }
       if(e.keyCode==114){
        let a=document.querySelector('.a_r').classList.add('a_active');
        //console.log(a);
        l_index.style.display='block';
       }
       if(e.keyCode==102){
        let a=document.querySelector('.a_f').classList.add('a_active');
        //console.log(a);
        l_index.style.display='block';
       }
       if(e.keyCode==118){
        let a=document.querySelector('.a_v').classList.add('a_active');
        //console.log(a);
        l_index.style.display='block';
       }
       if(e.keyCode==116){
        let a=document.querySelector('.a_t').classList.add('a_active');
        //console.log(a);
        l_index.style.display='block';
       }
       if(e.keyCode==103){
        let a=document.querySelector('.a_g').classList.add('a_active');
        //console.log(a);
        l_index.style.display='block';
       }
       if(e.keyCode==98){
        let a=document.querySelector('.a_b').classList.add('a_active');
        //console.log(a);
        l_index.style.display='block';
       }

       if(e.keyCode==121){
        let a=document.querySelector('.a_y').classList.add('a_active');
        //console.log(a);
        r_index.style.display='block';
       }
       if(e.keyCode==104){
        let a=document.querySelector('.a_h').classList.add('a_active');
        //console.log(a);
        r_index.style.display='block';
       }
       if(e.keyCode==110){
        let a=document.querySelector('.a_n').classList.add('a_active');
        //console.log(a);
        r_index.style.display='block';
       }
       if(e.keyCode==117){
        let a=document.querySelector('.a_u').classList.add('a_active');
        //console.log(a);
        r_index.style.display='block';
       }
       if(e.keyCode==106){
        let a=document.querySelector('.a_j').classList.add('a_active');
        //console.log(a);
        r_index.style.display='block';
       }
       if(e.keyCode==109){
        let a=document.querySelector('.a_m').classList.add('a_active');
        //console.log(a);
        r_index.style.display='block';
       }
       if(e.keyCode==105){
        let a=document.querySelector('.a_i').classList.add('a_active');
        //console.log(a);
        r_middle.style.display='block';
       }
       if(e.keyCode==107){
        let a=document.querySelector('.a_k').classList.add('a_active');
        //console.log(a);
        r_middle.style.display='block';
       }
       if(e.keyCode==111){
        let a=document.querySelector('.a_o').classList.add('a_active');
        //console.log(a);
        r_ring.style.display='block';
       }
       if(e.keyCode==108){
        let a=document.querySelector('.a_l').classList.add('a_active');
        //console.log(a);
        r_ring.style.display='block';
       }
       if(e.keyCode==112){
        let a=document.querySelector('.a_p').classList.add('a_active');
        //console.log(a);
        r_pinky.style.display='block';
       }
     
     
       playSound();
    
    });
    document.addEventListener('keyup',(e)=>{
       // console.log(e);
        var elements=document.getElementsByClassName('a_active');
        //console.log(elements);
        for(var i=0;i<elements.length;i++){
            elements[i].classList.remove('a_active');
        }
        var elements=document.getElementsByClassName('a_leftpinky');
       // console.log(elements);
        for (var i=0;i<elements.length;i++)
        {
            elements[i].style.display="none";
        }
      //  document.querySelector('.a_leftpinky').style.display='none';
      console.log('Initial',initialSequence);
      if(currentCharacterPosition>=perTwoLineCharCount)
      {  //console.log(' New Initial',initialSequence);
        currentCharacterPosition=0;
        initialSequence++;
        console.log('new initial',initialSequence);
      }
      else{

          currentCharacterPosition++;
      }
      
      console.log(currentCharacterPosition);

      if(initialSequence===1){
        let x=story.substring(initialSequence-1,(initialSequence*perTwoLineCharCount));
            console.log(story.substring(initialSequence-1,(initialSequence*perTwoLineCharCount)));
            let p1=x.substring(0,currentCharacterPosition);
            let p2=x.substring(currentCharacterPosition);
            p2="<span style='text-decoration:underline; color:red;'>"+ p2.charAt(0) +"</span>"+p2.slice(1);
            console.log('part 1-->',p1);
            console.log('part 1-->',p2);
            let a=`<span style="color:rgb(19, 124, 165)">${p1}</span>`+p2;
            document.querySelector('.a_typingcontent').innerHTML=a;
    
      }
      else{
        let x=story.substring((initialSequence-1)*perTwoLineCharCount,initialSequence*perTwoLineCharCount);
            console.log(story.substring((initialSequence-1)*perTwoLineCharCount,initialSequence*perTwoLineCharCount));
            let p1=x.substring(0,currentCharacterPosition);
            let p2=x.substring(currentCharacterPosition);
            p2="<span style='text-decoration:underline; color:red;'>"+ p2.charAt(0) +"</span>"+p2.slice(1);
            console.log('part 1-->',p1);
            console.log('part 1-->',p2);
            let a=`<span style="color:rgb(19, 124, 165)">${p1}</span>`+p2;
            document.querySelector('.a_typingcontent').innerHTML=x;
      }
      totalCCLoc++;
      console.log('ccloc',totalCCLoc);
    });
    var o=' ';
    for(var i=1;i<=60;i++)
    {
      o = o + `<option value="${i}">${i}</option>`;
    }
   // console.log(o);
   document.querySelector('.a_myselect').innerHTML=o;

   document.querySelector('.a_duration').innerHTML=localStorage.getItem('Duration')===null?' ':localStorage.getItem('Duration')+':00';
  // document.querySelector('.a_typingcontent').innerHTML=initialSequence;
  


})();