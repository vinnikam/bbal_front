import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barranav',
  templateUrl: './barranav.component.html',
  styleUrls: ['./barranav.component.scss']
})
export class BarranavComponent implements OnInit {

  autenticacion = true;

  constructor() { }

  ngOnInit(): void {
  }

}
