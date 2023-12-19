function sendMail() {
    var params = {
      position: document.getElementById("position").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      startdate: document.getElementById("startdate").value,
      Enddate: document.getElementById("Enddate").value,
      Age:document.getElementById("Age").value,
      Phone:document.getElementById("Phone").value,



    };
  
    const serviceID = "service_6shdt3u";
    const templateID = "template_fwqbioo";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "",
          document.getElementById("email").value = "",
          document.getElementById("Age").value = "",
          document.getElementById("Endate").value = "",
          document.getElementById("startdate").value = "",
          document.getElementById("position").value = "",
          document.getElementById("Phone").value = "",


          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }