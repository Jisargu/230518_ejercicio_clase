import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss']
})
export class MetasComponent implements OnInit {
  itemCount: number = 4;
  textitoTitulo: string = "Agrega más cosas amiguito";
  btnText: string = 'Add an Item';
  metasText: string = 'My first life goal';
  metas = [];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.metas.length;
  }
  addItem() {
    this.metas.push(this.metasText);
    this.metasText = '';
    this.itemCount = this.metas.length;
  }
  addTextito() {
    this.metas.push("Un textito");
    this.metasText = '';
    this.itemCount = this.metas.length;
  }
}
