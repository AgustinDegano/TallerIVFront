import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseHttpService } from './service/base-http-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private httpClientService: BaseHttpService) { }
  ngOnInit(): void {
    this.httpClientService.getData().subscribe((result:string) => {
      console.log(result)
    })
  }
  title = 'frontend';
}
