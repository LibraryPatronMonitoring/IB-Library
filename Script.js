const scriptURL="https://script.google.com/macros/s/AKfycby6pFDGbkmbh0Z0R9fObUXc1b7ssXNWqnHVKVL1jE6i4g6Mvues2L5ANAPA8TQj9N5E/exec",form=document.forms["submit-to-google-sheet"],msg=document.getElementById("msg");form.addEventListener("submit",a=>{a.preventDefault(),fetch(scriptURL,{method:"POST",body:new FormData(form)}).then(()=>{msg.innerHTML="Welcome To IB Library!",setTimeout(function(){msg.innerHTML=""},1e3),form.reset()}).catch(a=>console.error("Error!",a.message))});