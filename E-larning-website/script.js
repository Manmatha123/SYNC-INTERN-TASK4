var initial=0;
function scrollAppear() {
  let text1=document.getElementById("cntid1");
  let text2=document.getElementById("cntid2");
  let text3=document.getElementById("cntid3");
  let text4=document.getElementById("cntid4");

  let countingbox=document.getElementById("countingbox");

    var introPosition = countingbox.getBoundingClientRect().top;

    
    var screenPosition = window.innerHeight / 1.2;
    var count=0;
if(initial===0){


  if(introPosition>screenPosition) {
    initial=initial+1;
    let stop=setInterval(()=>{
      count++;
      if(count<=40){
        text2.innerHTML=count;
        text1.innerHTML=count;
        text3.innerHTML=count;
        text4.innerHTML=count;
      }
      else if(count<=45){
        text1.innerHTML=count;
        text3.innerHTML=count;
        text4.innerHTML=count;
      }
      else if(count<=120){
        text1.innerHTML=count;
        text3.innerHTML=count;
    
      }
      else if(count<=140){
        text1.innerHTML=count;
      }
      else{
    clearInterval(stop);
      }
    },50)
    
        }
}
else{
  
  clearInterval(stop)
}


  }
  
  window.addEventListener('scroll', scrollAppear);
  