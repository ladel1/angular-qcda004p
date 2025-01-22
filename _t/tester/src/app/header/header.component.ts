import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  KeyValueDiffer,
  KeyValueDiffers,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges,DoCheck {
  @Input() message="";
  data=""
  @Output() dataEmitter:EventEmitter<string> = new EventEmitter();
  private differ: KeyValueDiffer<string, any>;

  constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['message']) {
      console.log('Previous value:', changes['message'].previousValue);
      console.log('Current value:', changes['message'].currentValue);
      console.log('First change:', changes['message'].firstChange);
    }
  }
  ngDoCheck() {
    console.log("zzzzzzzzzzzzzz")
  }

  onSend():void{
      this.dataEmitter.emit(this.data);
  }

}
