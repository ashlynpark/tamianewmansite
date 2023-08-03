import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail2',
  templateUrl: './thumbnail2.component.html',
  styleUrls: ['./thumbnail2.component.css']
})
export class Thumbnail2Component {
  @Input() imgsrc : string = '';
  @Input() title : string = '';
  @Input() description : string = '';
  @Input() redtxt: string = '0';
  @Input() greentxt: string = '0';
  @Input() bluetxt: string = '0';
  @Input() pageroute:string ='#';
}
