import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlFlowComponent } from '../../components/control-flow/control-flow.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ControlFlowComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

}
