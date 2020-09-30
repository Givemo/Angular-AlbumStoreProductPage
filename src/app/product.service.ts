import { Injectable } from "@angular/core";
import { HttpModule } from "@angular/http";

@Injectable()
export class ProductService {
  constructor(private _http: Http) {}
}
