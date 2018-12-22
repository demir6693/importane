import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(function(){
      $('#s_p_1').hover(function()
      {
        $('#s_p_img').attr('src', 'assets/sistemi_prozora_ulaznih_vrata/88 mm systems.jpg');
      },
      function()
      {
        $('#s_p_img').attr('src', 'assets/prozori_ulaznavrata.jpg')
      });


      $('#s_p_2').hover(function()
      {
        $('#s_p_img').attr('src', 'assets/sistemi_prozora_ulaznih_vrata/76 mm systems.jpg');
      },
      function()
      {
        $('#s_p_img').attr('src', 'assets/klizni_sistemi.jpg')
      });


      $('#s_p_3').hover(function()
      {
        $('#s_p_img').attr('src', 'assets/sistemi_prozora_ulaznih_vrata/70 mm systems.jpg');
      },
      function()
      {
        $('#s_p_img').attr('src', 'assets/klizni_sistemi.jpg')
      });



      $('#k_s_1').hover(function()
      {
        $('#k_s_img').attr('src', 'assets/klizni_sistemi/klizni.jpg');
      },
      function()
      {
        $('#k_s_img').attr('src', 'assets/klizni_sistemi.jpg')
      });

      $('#k_s_2').hover(function()
      {
        $('#k_s_img').attr('src', 'assets/klizni_sistemi/podizno-klizni.jpg');
      },
      function()
      {
        $('#k_s_img').attr('src', 'assets/klizni_sistemi.jpg')
      });
    });
  }

}
