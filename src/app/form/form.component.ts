import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private sanitizer: DomSanitizer) { }
  dataForm: FormGroup;
  downloadJsonHref: any;

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      color: [ '', Validators.required],
      name: [ '', Validators.required],
      gender: [ '', Validators.required]
    });

  }
  addComponent() {
    console.log(this.dataForm);
  }
getFormDetails() {
  console.log(this.dataForm.value);
  const theJSON = JSON.stringify(this.dataForm.value);
  const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
  this.downloadJsonHref = uri;
}
}
