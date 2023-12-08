import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, signal } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlFlowComponent implements OnInit {

  protected isValid = signal(true);
  protected isConfirmed = signal(true);
  protected listData: WritableSignal<Array<string>> = signal([]);
  protected requestLoading = signal(true);

  ngOnInit(): void {
    this.#getList();
  }

  protected resetValidConfirmedStatus() {
    this.isValid.set(true);
    this.isConfirmed.set(true);
  }

  protected reloadList() {
    this.requestLoading.set(true);
    this.#getList();
  }

  protected clearList() {
    this.listData.set([]);
  }

  #getList() {
    this.listData.set([]);
    of(['Item 01', 'Item 02', 'Item 03', 'Item 04', 'Item 05'])
      .pipe(
        delay(0),
        tap(() => {
          this.requestLoading.set(false);
        }),
      )
      .subscribe((res) => {
        this.listData.set(res);
      })
  }
}
