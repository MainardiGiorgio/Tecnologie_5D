import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css']
})
export class AutoreComponent {
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
    this.obsTrack = this.spotify.searchAuthor(this.query);
    this.obsTrack.subscribe((data) => this.results = data); 
  }
}