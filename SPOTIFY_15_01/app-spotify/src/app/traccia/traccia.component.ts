import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-traccia',
  templateUrl: './traccia.component.html',
  styleUrls: ['./traccia.component.css']
})
export class TracciaComponent {
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
    this.obsTrack = this.spotify.searchTrack(this.query);
    this.obsTrack.subscribe((data) => this.results = data); 
  }
}