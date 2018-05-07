import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InstagramService} from '../services/instagram.service';

@Component({
  selector: '[app-color]',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Input() color: any;
  @Output() cambia = new EventEmitter<string>();
  title = '';
  arreglo: any[];

  photo = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.arreglo = [];

    this.instagramService.getPhotos().subscribe(
      (data: any) => {
        console.log(data);
        this.photo = data.thumbnail_url;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onClick() {
    this.cambia.emit(this.color);
    this.title = 'cambió';
  }

  onSubmit(form) {
    console.log(form);
    this.arreglo.push(form.value.title);
    console.log(this.arreglo);
  }

}
