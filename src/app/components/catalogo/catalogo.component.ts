import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  productos: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((response) => {
      this.productos = response.results.slice(0, 30);
    });
  }
}
