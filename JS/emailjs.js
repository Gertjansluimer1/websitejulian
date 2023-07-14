/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_u5gcyni', 'template_ceys9a5', '#contact-form', 'taskJapT22UjU3cem')
      .then(() =>{
         // Show sent message
         contactMessage.textContent = 'Bericht is verstuurd ✅'

         // Remove message after five seconds
         setTimeout(() =>{
            contactMessage.textContent = ''
         }, 5000)

         // Clear input fields
         contactForm.reset()

      }, () =>{
         // Show error message
         contactMessage.textContent = 'Bericht is niet verstuurd (service error) ❌'
      })
}

contactForm.addEventListener('submit', sendEmail)
