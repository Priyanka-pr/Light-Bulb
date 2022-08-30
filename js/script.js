document.getElementById('btn-on').addEventListener('click', function(e){
    if(document.getElementById('btn-on').innerText == 'Turn On'){
        document.getElementById('bulb').src='img/bulb-On.jpg';
        document.getElementById('btn-on').innerText = 'Turn Off';
    }
   else if(document.getElementById('btn-on').innerText == 'Turn Off'){
    document.getElementById('bulb').src='img/bulb-Off.jpg';
    document.getElementById('btn-on').innerText = 'Turn On';
   }
} );
