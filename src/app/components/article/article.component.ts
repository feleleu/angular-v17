import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  @Input() title = 'Lorem, ipsum dolor.';
  @Input() description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?';
  @Input() date = new Date();
  @Input() author = 'Lorem ipsum';

}
