import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<h1>{{title}}</h1>
  //          <p>
  //          Lorem ipsum dolor sit amet, 
  //          consectetur adipisicing elit. 
  //          Perspiciatis perferendis voluptatem mollitia, facere, placeat 
  //          eligendi ex ipsa quisquam non officiis obcaecati. Deleniti libero culpa,
  //           reprehenderit quos nulla dolore eligendi tempora!</p>`
  styleUrls: ['./app.component.css']
  //styles:[`
  //  h1{
  //      color:red;
  //  }
  //`]
})
export class AppComponent {
   title = 'First Application';
}
