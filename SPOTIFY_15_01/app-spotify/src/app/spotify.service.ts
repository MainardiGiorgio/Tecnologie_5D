import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient

  // Dichiarazione della variabile
  public token: string;
  
  constructor(private http: HttpClient) { 
    //Token da modificare ogni ora
    this.token = 'Bearer BQCaTQLVjhK0D02Vlu21cuz8JfvGQnIS0l6fPk3JlmqozOj1eomBHlimNvS3Xpej8r1mr7bANFLwO2WLySESkV0PQxz0EOXBHFzNGx6djcsFUNNAPr5yKbcXwge_8rNvbAXk8a7QK2XX_ABpv5DDFDPVbDDtis9h4fWbxScDJnzL3PUWvFHTQweYSD9V7kE_dM_0tCaZxTX8w1g';
  }
 
  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization: this.token
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  searchAuthor(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`;
    const headers = new HttpHeaders({
      Authorization: this.token
});

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  searchAlbum(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=album`;
    const headers = new HttpHeaders({
      Authorization: this.token
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
