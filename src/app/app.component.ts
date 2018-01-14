import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Post {
  id: number;
  userId: number;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  results;

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}

    click(): void {
      console.log("aaa")
      // Make the HTTP request:
      this.http.get<Post>("https://jsonplaceholder.typicode.com/posts/"+Math.floor(Math.random()*100)).subscribe(data => {
        // Read the result field from the JSON response.
        console.log(data)
        this.results = data.title;
      });
    }



  }
