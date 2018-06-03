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

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select(selectAuthState).subscribe(
      res => this.listProducts = res
    )
    setTimeout(() => {
      console.log(this.listProducts)  
    }, 1000);
    
  }

  ngOnInit() {
    this.store.dispatch(new GetProducts({}))
  }

}
