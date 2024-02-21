function improperAlt() {
    let AllImg = document.querySelectorAll('img');
    AllImg.forEach(img => {
        let imgalt = img.alt;
        let imaageSrc = img.src;
        let breakImageSrc = imaageSrc.split('/');
        let check = breakImageSrc.slice(-1);
        let extentionRemover = check[0].split('.');
        let imgName = extentionRemover[0].replace('-', ' ');
        if (img.hasAttribute("alt") && imgalt !== '') {

        } else {
            img.setAttribute('alt', imgName)
        }
    })
}
improperAlt()



const form = document.querySelector("#registerationForm"); function validate() { const firstName = document.querySelector("#fName"), lastName = document.querySelector("#lName"); let fNameError = document.querySelector(".fError"), lNameError = document.querySelector(".lError"); const email = document.querySelector("#email"), mobile = document.querySelector("#mob"); let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, mobformat = /^(\+\d{1,3}[- ]?)?\d{10}$/, emailError = document.querySelector("input[type='email'] ~ span"), mobError = document.querySelector(".mobError"), message = document.getElementById("msg"), msgError = document.querySelector(".msgError"); return firstName.value.length < 3 ? fNameError.textContent = "Enter First Name" : fNameError.textContent = "", lastName.value.length < 3 ? lNameError.textContent = "Enter Last Name" : lNameError.textContent = "", email.value.match(mailformat) ? emailError.textContent = "" : emailError.textContent = "Email is not valid", mobile.value.match(mobformat) ? mobError.textContent = "" : mobError.textContent = "Enter a valid number", message.value.length > 200 ? msgError.textContent = "Max Length 200 characters" : msgError.textContent = "", "" === fNameError.textContent && "" === emailError.textContent && "" === mobError.textContent && "" === msgError.textContent } form.addEventListener("submit", (function (event) { if (!validate()) return !1; event.preventDefault(); var formData = $(this).serialize(); console.log(formData), $.ajax({ type: "POST", dataType: "json", url: "https://www.videocrypt.com/website/pages/videoStream", data: formData, success: function (response) { 1 == response.status ? window.location.href = "https://www.videocrypt.com/website/pages/custom_thanku" : Swal.fire({ title: "Went Somthing Wrong", confirmButtonColor: "#d74b00", text: "You clicked the button!", icon: "success" }).then(result => { result.isConfirmed && location.reload() }) } }) })), window.onscroll = function () { myFunction() }; let nav = document.querySelector("nav"), headerIamge = document.querySelector('.navbar-brand > img'),stickyimage =  headerIamge.getAttribute('src').replace('appsquadz-logo','appsquadz-logo-white'), mybutton = document.getElementById("btnBkTop"); function myFunction() { function backToTop() { document.body.scrollTop = 0, document.documentElement.scrollTop = 0 } document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 ? (nav.classList.add("skitcy-top"),headerIamge.src = stickyimage, mybutton.style.display = "block") : (nav.classList.remove("skitcy-top"), headerIamge.src = stickyimage.replace('appsquadz-logo-white','appsquadz-logo'), mybutton.style.display = "none"), mybutton.addEventListener("click", backToTop) }