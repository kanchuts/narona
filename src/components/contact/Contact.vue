<template>
  <!-- Material form contact -->
  <mdb-container>
  <mdb-card>
    <mdb-card-body>
  <form class="contact-form" @submit.prevent="sendEmail">
    <p class="h4 text-center mb-4">Contact Us</p>
    <div class="grey-text">
      <mdb-input name="user_name" label="Your name"  group type="text" validate error="wrong" success="right"/>
      <mdb-input name="user_email" label="Your email" group type="email" validate error="wrong" success="right"/>
      <mdb-input name="user_subject" label="Subject"  group type="text" validate error="wrong" success="right"/>
      <mdb-textarea :rows="2" label="Your message" name="message"/>
    </div>
    <div class="text-center">
        <mdb-btn outline="secondary" type="submit">Send</mdb-btn>
    </div>
  </form>
    <!-- Material form contact -->
    </mdb-card-body>
  </mdb-card>
  </mdb-container>
</template>

<script>
import emailjs from 'emailjs-com';
import { mdbContainer, mdbBtn, mdbInput, mdbTextarea,  mdbCard, mdbCardBody } from 'mdbvue';
export default {
components: {
      mdbInput,
      mdbContainer,
      mdbBtn,
      mdbTextarea,
       mdbCard,
      mdbCardBody
    },
  // data() {
  //   contact
  // },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('wahono', 'template_yxZttT6P', e.target, 'user_SdjEuTsaoicQLMd8G4YK0')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            window.location.reload()
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}

</script>
