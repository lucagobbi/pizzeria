import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dove-siamo',
  templateUrl: './dove-siamo.component.html',
  styleUrls: ['./dove-siamo.component.scss']
})
export class DoveSiamoComponent implements OnInit {

  latitude = 45.56854879423264;
  longitude = 9.971549883719874;

  constructor() { }

  ngOnInit(): void {}


}
