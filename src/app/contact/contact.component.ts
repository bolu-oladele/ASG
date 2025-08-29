import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgModel, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})

export class ContactComponent {
  hideForm() {
    let elem: HTMLElement = document.getElementById('form')!;
    elem.style.display = "none";
    let success: HTMLElement = document.getElementById('success')!;
    success.style.display = "block";
  }
  
  submit(form: NgForm){

    let response = form.value;
    this.hideForm()
    
    emailjs.init('INSERT_EMAILJS_CODE')
    emailjs.send("SERVICE_ID","TEMPLATE_ID",{
      from_name: response.name,
      from_email: response.email,
      from_number: response.tel,
      message: response.message,
    });
  }
}