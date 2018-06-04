import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../store/app.states';
import { GetProducts } from '../../store/actions/auth.actions';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public listProducts;
  public end = 10;

  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    // this.store.dispatch(new GetProducts({}))
  }

  public getProducts(): void {
    
    this.store.dispatch(new GetProducts({ start: 0, end: this.end }))
    this.store.select(selectAuthState).subscribe(
      res => this.listProducts = res
    )

    console.log(this.listProducts)
    if (this.end >= 10) {
      this.end = this.end + this.end;
    }

  }

}
