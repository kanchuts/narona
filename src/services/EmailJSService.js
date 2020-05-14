//import axios from 'axios'
const API_URL = 'https://api.emailjs.com/api/v1.0/email/send'

export class EmailJSService {

    // token = '579d1c3270ab22c075588f846617ff3b'

    getBaseUrl () {
        return API_URL
    }
    
    // var data = {
    //     service_id: 'narona',
    //     template_id: 'template_W0YQPDWY',
    //     user_id: 'user_7B91VmlbedNn5rAx1xHp0',
    // };
     
    // $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    //     type: 'POST',
    //     data: JSON.stringify(data),
    //     contentType: 'application/json'
    // }).done(function() {
    //     alert('Your mail is sent!');
    // }).fail(function(error) {
    //     alert('Oops... ' + JSON.stringify(error));
    // });
}