import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
})
export class WorldComponent {
  countryData: any = {};
  constructor(private apiService: ApiService) {}

  setCountryData(event: any) {
    this.apiService.setCountryData(event.target.id).subscribe((data: any) => {
      this.countryData = data;
    });
  }
}
