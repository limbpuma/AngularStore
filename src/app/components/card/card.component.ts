// card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  image = 'https://picsum.photos/200/200';
  @Input() title = '';
  @Input() text = '';
  @Input() price = '0';
  @Input() detail = '';
  @Input() productId: number = -1;
}



