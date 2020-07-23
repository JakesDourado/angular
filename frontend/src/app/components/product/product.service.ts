import { map, catchError } from 'rxjs/operators';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  baseURl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURl, product).pipe(
      map((obj) => obj), //isso é pra mostrar a mensagem de erro
      catchError (e => this.errorHandler(e) )
    );
  }
 

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURl).pipe(
      map((obj) => obj), //isso é pra mostrar a mensagem de erro
      catchError (e => this.errorHandler(e) ));
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseURl}/${id}`;
    return this.http.get<Product>(url);
  }

  updata(product: Product): Observable<Product> {
    const url = `${this.baseURl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj), //isso é pra mostrar a mensagem de erro
      catchError (e => this.errorHandler(e) ));
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseURl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj), //isso é pra mostrar a mensagem de erro
      catchError (e => this.errorHandler(e) ));
  }
  errorHandler(e: any): Observable<any>{
    this.showMessage('Erro de comunicação, processo não enviado ', true)
 return EMPTY
  }
}
