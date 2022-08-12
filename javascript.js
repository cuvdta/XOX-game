var buttons=document.querySelectorAll('button');
turn=0

var logButtonIndex=function(buttonIndex){
  owit=document.getElementById(buttonIndex).innerHTML;
  if(owit!='O'&&owit!='X'){
    if(turn%2==1){
      if(owit!='X'){
        document.getElementById(buttonIndex).innerHTML = "O";
        
        document.getElementById('turn').innerHTML = "X's turn";
      }
      
    }
    else{
      if(owit!='O'){
        document.getElementById(buttonIndex).innerHTML = "X";
        document.getElementById('turn').innerHTML = "O's turn";
      }
    }
    turn++;
  }

  one=document.getElementById('1').innerHTML
  two=document.getElementById('2').innerHTML
  thr=document.getElementById('3').innerHTML
  fou=document.getElementById('4').innerHTML
  fiv=document.getElementById('5').innerHTML
  six=document.getElementById('6').innerHTML
  sev=document.getElementById('7').innerHTML
  eig=document.getElementById('8').innerHTML
  nin=document.getElementById('9').innerHTML

  won=false
  if(one==two&&two==thr&&one!=''){
    document.getElementById('turn').innerHTML = one +" won";
    alert(one +" won");
    location.reload();
    won=true
  }
  if(fou==fiv&&fiv==six&&fiv!=''){
    document.getElementById('turn').innerHTML = fou +" won";
    alert(fou +" won");
    location.reload();
    won=true
  }
  if(sev==eig&&eig==nin&&nin!=''){
    document.getElementById('turn').innerHTML = sev +" won";
    alert(sev +" won");
    location.reload();
    won=true
  }
  if(one==fou&&fou==sev&&one!=''){
    document.getElementById('turn').innerHTML = one +" won";
    alert(one +" won");
    location.reload();
    won=true
  }
  if(two==fiv&&fiv==eig&&fiv!=''){
    document.getElementById('turn').innerHTML = two +" won";
    alert(two +" won");
    location.reload();
    won=true
  }
  if(thr==six&&six==nin&&nin!=''){
    document.getElementById('turn').innerHTML = thr +" won";
    alert(thr +" won");
    location.reload();
    won=true
  }
  if(one==fiv&&fiv==nin&&one!=''){
    document.getElementById('turn').innerHTML = one +" won";
    alert(one +" won");
    location.reload();
    won=true    
  }
  if(thr==fiv&&fiv==sev&&fiv!=''){
    document.getElementById('turn').innerHTML = thr +" won";
    alert(thr +" won");
    location.reload();
    won=true
  }
  if(turn>=9&&won==false){
    document.getElementById('turn').innerHTML = "Even";
    alert("Even");
    location.reload();
  }
  console.log(turn)

}

buttons.forEach(function(button,index){
  button.addEventListener('click', function(){
    logButtonIndex(index+1);
  });
});
