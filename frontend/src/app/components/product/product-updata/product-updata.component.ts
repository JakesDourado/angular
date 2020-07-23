import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-updata',
  templateUrl: './product-updata.component.html',
  styleUrls: ['./product-updata.component.css']
})
export class ProductUpdataComponent implements OnInit {

  product: Product
  // 1º passo pra fazer com que os dados venham p poder alterar
  // e em seguida faz a injeção no constructor "private route: ActivatedRoute"
  // e no iniciar ngOnInit, já coloca "this.productService.readById;"
  // depois faz a complementação como diz os proximos comentários
  
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    });

  }

  updateProduct(): void {

  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
