const scriptURL="https://script.google.com/macros/s/AKfycby6pFDGbkmbh0Z0R9fObUXc1b7ssXNWqnHVKVL1jE6i4g6Mvues2L5ANAPA8TQj9N5E/exec",form=document.forms["submit-to-google-sheet"],msg=document.getElementById("msg"),progressBar=document.getElementById("progress-bar");function validateForm(){for(const input of form.querySelectorAll("[required]"))if(!input.value.trim())return!1;return!0}form.addEventListener("submit",e=>{e.preventDefault(),validateForm()?(progressBar.style.width="0%",move(),fetch(scriptURL,{method:"POST",body:new FormData(form)}).then(response=>{if(response.ok)return response.text("");throw new Error("Network response was not ok")}).then(data=>{msg.innerHTML="Welcome To IB Library!",setTimeout(function(){msg.innerHTML="",progressBar.style.width="0%"},1e3),form.reset()}).catch(error=>{msg.innerHTML="Error occurred during submission.",progressBar.style.width="0%"})):msg.innerHTML="Please fill out all required fields."});let i=0;function move(){if(0===i){let width=i=1,id=setInterval(function(){100<=width?(clearInterval(id),i=0):(width++,progressBar.style.width=width+"%")},20)}}