import { Component, OnInit} from '@angular/core';
import { Categoria } from '../../categorias/categoria';
import { Lugar } from '../../lugares/lugar';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria implements OnInit {

  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe(categorias => {
      this.categoriasFiltro = categorias;
    });

    this.lugarService.obterTodas().subscribe(lugares => {
      this.lugares = lugares;
    });

  }

}
