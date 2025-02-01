import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  submitted:boolean = false;



  onSubmit(form:NgForm){
    this.submitted = true;

    console.log(form.value);
    
    alert('Form submitted Successfully.')

    form.resetForm();

  }

}
