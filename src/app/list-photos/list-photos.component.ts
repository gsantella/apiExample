import { Component, Input } from '@angular/core';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css']
})
export class ListPhotosComponent {

  @Input() photoPreferenceId:any = 0

  photo:any
  photos:any

  constructor(private photoService:PhotoService) {}

  ngOnInit(): void {    
    
    this.photoService.getPhoto(this.photoPreferenceId).subscribe(response => {
      this.photo = response
    })
    
    this.photoService.getPhotos().subscribe(response => {
      this.photos = response
    })
  }

}
