import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  blockChain : any = [];
  propertyData: any = {};
  offers: any = [];
  stream : any = 'awrgawrg';
  availability: any = ['For RENT','for SALE'];
  bedrooms: any = ['0','1','2','3','4','5+'];

  contactForm: FormGroup;

  constructor(
    private dataService : DataService,
    private _formBuilder: FormBuilder
    ){
    this.contactForm = this._formBuilder.group({
      'title': ['', Validators.required],
      'detail': ['', Validators.required],
      'price' : ['', Validators.required],
      'bedrooms' : ['', Validators.required],
      'reference' : ['', Validators.required],
      'availability' : ['', Validators.required]
    }); 
  }

  ngOnInit() {
    
  }

  publishComment() {
    this.dataService.publishComment(this.contactForm.value).subscribe(response => {
      this.loadStream(this.contactForm.value.stream);
    });
  }

  createStream() {
    this.stream = this.contactForm.value.reference;
    this.dataService.createStream(this.contactForm.value).subscribe(response => {
      console.log(response);
    });
  }

  loadStream(value) {
    console.log(value);
    this.dataService.getStream(value).subscribe(response => {
      this.propertyData = response[0].data.json;
      this.blockChain = response;
    });
    this.dataService.getOffers(value).subscribe(response => {
      console.log(response);
      this.offers = response;
    });

  }
}
