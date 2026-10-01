import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe(categorias => {
      this.categoriasFiltro = categorias;
      this.cdr.detectChanges();
    });

    this.lugarService.obterTodas().subscribe(lugares => {
      this.lugares = lugares;
      this.cdr.detectChanges();
    });
  }

  getTotalEstrelas(lugar: Lugar): string {
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0));
  }

  filtrar(): void {
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro).subscribe(resultado => {
      this.lugares = resultado;
      this.cdr.detectChanges();
    });
  }
}
