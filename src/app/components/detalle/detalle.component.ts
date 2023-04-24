import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  productoId: string = '';
  producto: any;
  descripcion: string = '';

  constructor(private route: ActivatedRoute, private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productoId = this.route.snapshot.paramMap.get('id')!;
    this.getProductDetails(this.productoId);
  }

  getProductDetails(id: string): void {
    this.productosService.getProductoById(id).subscribe((response) => {
      this.producto = response;
    });

    this.productosService.getProductoDescription(id).subscribe((response) => {
      this.descripcion = response.plain_text;
    });
  }
}

