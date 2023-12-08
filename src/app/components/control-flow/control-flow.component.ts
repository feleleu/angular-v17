import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlFlowComponent {

  protected isValid = signal(true);
  protected isConfirmed = signal(true);

  protected resetValidConfirmedStatus() {
    this.isValid.set(true);
    this.isConfirmed.set(true);
  }

}
