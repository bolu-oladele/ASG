import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgModel, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})

export class LoginComponent {
  submit(form: NgForm){

    let response = form.value;
  }
}
