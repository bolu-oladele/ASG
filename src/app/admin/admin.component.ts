import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgModel, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  isLoggedIn = false // Tracks login status
  username = ''
  password = ''
  loginError = ''

  uploadedImage: string | null = null // Stores uploaded image URL or base64
  selectedPage = 'home' // Default selected page
  content = '' // Text content for the selected page

  // Simulate login (replace with actual authentication logic)
  onLogin() {
    if (this.username === 'admin' && this.password === 'password') {
      this.isLoggedIn = true
      this.loginError = ''
    } else {
      this.loginError = 'Invalid username or password.'
    }
  }

  // Simulate logout
  onLogout() {
    this.isLoggedIn = false
    this.username = ''
    this.password = ''
  }

  // Handle image upload (simulated)
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement
    if (input.files && input.files[0]) {
      const file = input.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        this.uploadedImage = reader.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  // Simulate image upload
  onUploadImage() {
    alert(`Image uploaded: ${this.uploadedImage}`)
    // Add logic to send image to the server
  }

  // Simulate text content update
  onUpdateText() {
    alert(`Updated "${this.selectedPage}" page content: ${this.content}`)
    // Add logic to send updated content to the server
  }
}
