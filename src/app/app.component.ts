import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8';
  expectedString = 'recipe';

  onEmmitedFeature(feature: string) {
    this.expectedString = feature;
  }
}
