import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-deferrable-view',
  standalone: true,
  imports: [
    ArticleComponent,
  ],
  templateUrl: './deferrable-view.component.html',
  styleUrl: './deferrable-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferrableViewComponent {
  protected loading = toSignal(of(true).pipe(delay(3000)));
}
