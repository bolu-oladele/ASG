import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgModel, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})

export class HomeComponent {
  hideForm() {
    let elem: HTMLElement = document.getElementById('form')!;
    elem.style.display = "none";
    let success: HTMLElement = document.getElementById('success')!;
    success.style.display = "block";
  }
  
  submit(form: NgForm){

    let response = form.value;
    this.hideForm()
    
    emailjs.init('Al-a1nd8YlJNhOTE2')
    emailjs.send("service_ui953o9","template_aa4dnwg",{
      from_name: response.name,
      from_email: response.email,
      from_number: response.tel,
      message: response.message,
    });
  }
}