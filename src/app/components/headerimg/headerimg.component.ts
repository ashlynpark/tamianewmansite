import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headerimg',
  templateUrl: './headerimg.component.html',
  styleUrls: ['./headerimg.component.css']
})
export class HeaderimgComponent {
  @Input() imgsrc : string = '';
  @Input() title : string = '';
}
