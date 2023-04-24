import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productos: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((response) => {
      this.productos = response.results.slice(0, 4);
    });
  }
}


