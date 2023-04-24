import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=iphone';
  private itemUrl = 'https://api.mercadolibre.com/items';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProductoById(id: string): Observable<any> {
    return this.http.get(`${this.itemUrl}/${id}`);
  }

  getProductoDescription(id: string): Observable<any> {
    return this.http.get(`${this.itemUrl}/${id}/description`);
  }
}

