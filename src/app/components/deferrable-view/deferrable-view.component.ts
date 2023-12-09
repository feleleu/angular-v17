import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-deferrable-view',
  standalone: true,
  imports: [],
  templateUrl: './deferrable-view.component.html',
  styleUrl: './deferrable-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferrableViewComponent {

}
