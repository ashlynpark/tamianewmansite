import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  @Input() imgsrc : string = '';
  @Input() title : string = '';
  @Input() description : string = '';
  @Input() redbg: string = '255';
  @Input() greenbg: string = '255';
  @Input() bluebg: string = '255';
  @Input() redtxt: string = '0';
  @Input() greentxt: string = '0';
  @Input() bluetxt: string = '0';


}
