(function(){
  var grid=document.getElementById('holes'), hint=document.getElementById('hint');
  var punched=[true,true,true,false,false,false,false,false,false,false];
  function render(){
    grid.innerHTML='';
    var left=0;
    punched.forEach(function(p,i){
      if(!p) left++;
      var b=document.createElement('button');
      b.type='button'; b.className='hole'+(p?' punched':''); b.textContent=i+1;
      b.setAttribute('aria-pressed',p); b.setAttribute('aria-label','Visit '+(i+1)+(p?' used':' available'));
      b.addEventListener('click',function(){punched[i]=!punched[i]; render(); grid.children[i].focus();});
      grid.appendChild(b);
    });
    hint.innerHTML = left===0 ? 'Card full. <b>Time for a membership?</b>' : 'Tap a circle to punch a visit · <b>'+left+' left</b>';
  }
  render();
  var btn=document.getElementById('copyEmail');
  btn.addEventListener('click',function(){
    var t=document.getElementById('email').textContent;
    try{ navigator.clipboard.writeText(t).then(function(){btn.textContent='Copied';},sel); }catch(e){ sel(); }
    function sel(){ var r=document.createRange(); r.selectNodeContents(document.getElementById('email')); var s=getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent='Selected, press copy'; }
  });
})();
