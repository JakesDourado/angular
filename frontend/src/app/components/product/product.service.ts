import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  baseURl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURl);
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseURl}/${id}`;
    return this.http.get<Product>(url);;
  }

  updata(product: Product): Observable<Product> {
    const url = `${this.baseURl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseURl}/${id}`;
    return this.http.delete<Product>(url);
  }
}
