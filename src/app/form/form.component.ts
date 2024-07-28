import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

constructor(public fbobj: FormBuilder) {}

  Form = this.fbobj.group({
    from_name: 'Tirupati website',
    UserName: ['', [Validators.required, Validators.minLength(5)]],
    Email: ['', [Validators.required, Validators.email]],
    Feedback: ['', Validators.required],
    reply_to: 'Prasad',
  });

  send() {
    if (this.Form.valid) {
      emailjs.init('owkBqovjyp9gy-zS2');
      emailjs
        .send('service_0gr13yw', 'template_84dlu1j', {
          from_name: 'Tirupati Website',
          UserName: this.Form.value.UserName,
          Feedback: this.Form.value.Feedback,
          reply_to: 'Prasad',
          Email: this.Form.value.Email,
        })
        .then(
          (response) => {
            alert('Feedback has been sent to Developer..👍');
            this.Form.reset();
          },
          (error) => {
            console.error('Error sending email:', error);
            alert('Error sending feedback. Please try again.');
          }
        );
    } else {
      // The form is not valid, show a message or handle accordingly
      alert('Please fill in all the required fields correctly.');
    }
  }
}


