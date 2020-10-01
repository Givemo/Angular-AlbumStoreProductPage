import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";

  constructor(private _http: HttpClient) {}

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) => response);
  }
}
