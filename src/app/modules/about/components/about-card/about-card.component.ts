import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['../../../../app.component.scss', './about-card.component.scss'],
})
export class AboutCardComponent {
  @Input() card: any = {};
}
