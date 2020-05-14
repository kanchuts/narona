<template>


  <div class="card">
    <br>
    <h1 class="title"><strong>Kontak</strong></h1>
    <br>
    <br>
	<form class="contact-form" @submit.prevent="sendEmail">
    <table align="center" style="width:100%">
      <tr>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td><label>Name</label></td>
        <td><input type="text" name="user_name" width="1000%"></td>
      </tr>
      <tr>
        <td> <label>Email</label></td>
        <td><input type="email" name="user_email"></td>
      </tr>
      <tr>
        <td>
          <label>Message</label>
        </td>
        <td>
          <textarea name="message"></textarea>
        </td>
      </tr>
    </table>
    <input type="submit" value="Send">
  </form>
  </div>

</template>

<script>
import emailjs from 'emailjs-com';
export default {

  // data() {
  //   contact
  // },

  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('narona', 'template_W0YQPDWY', e.target, ' user_7B91VmlbedNn5rAx1xHp0')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>