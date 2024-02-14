import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {
  @Output() onEmit = new EventEmitter<string>();

  data = 'default';

  dataChanged(ev: any) {
    this.data = ev.target.value;
  }

  emit() {
    this.onEmit.emit(this.data);
  }
}

