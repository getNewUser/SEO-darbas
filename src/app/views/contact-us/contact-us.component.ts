import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  ngOnInit() {
  }
  title = 'Angular Form Validation Tutorial';
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
  createForm() {
   this.myForm = this.fb.group({
      name: ['', Validators.required ],
      address: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
   });
 }
}
