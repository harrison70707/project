import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldMapComponent {
  @Output() countrySelected = new EventEmitter<string>();

  onMapClick(event: MouseEvent): void {
    const countryCode = this.getCountryCodeFromEvent(event);
    this.countrySelected.emit(countryCode);
  }

  private getCountryCodeFromEvent(event: MouseEvent): string {
    // Implement logic to get country code from the event
    return 'US'; // Example country code
  }
}