import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countryData: any;

  constructor(private apiService: ApiService) {}

  onCountrySelected(countryCode: string): void {
    this.apiService.getCountryData(countryCode).subscribe(data => {
      this.countryData = data[1][0];
    });
  }
}
