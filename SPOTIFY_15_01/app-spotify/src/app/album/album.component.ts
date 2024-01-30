import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  title = 'app-spotify';
  query: string;
  obsTrack: Observable<Object>;
  results: any;
  constructor(public spotify: SpotifyService) {
   
  }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.searchAlbum(this.query);
    this.obsTrack.subscribe((data) => this.results = data); 
  }
}
