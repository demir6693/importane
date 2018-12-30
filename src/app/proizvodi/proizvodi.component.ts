import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export class ProizvodiComponent implements OnInit {

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
    
    $('#m9650').hover(function()
      {
        $('#apa_img').attr('src', 'assets/alu-profili/m9650.jpg');
      },
      function()
      {
        $('#apa_img').attr('src', 'assets/sistemi_zastora.jpg')
      });

      $('#m9660').hover(function()
      {
        $('#apa_img').attr('src', 'assets/alu-profili/m9660.jpg');
      },
      function()
      {
        $('#apa_img').attr('src', 'assets/sistemi_zastora.jpg')
      });

      $('#m11000').hover(function()
      {
        $('#apa_img').attr('src', 'assets/alu-profili/m11000.jpg');
      },
      function()
      {
        $('#apa_img').attr('src', 'assets/sistemi_zastora.jpg')
      });

      $('#s350').hover(function()
      {
        $('#klizni-sis-al-img').attr('src', 'assets/klizni_sistemi/s350.jpg');
      },
      function()
      {
        $('#klizni-sis-al-img').attr('src', 'assets/klizni_sistemi.jpg')
      });

      $('#s440').hover(function()
      {
        $('#klizni-sis-al-img').attr('src', 'assets/klizni_sistemi/s440.jpg');
      },
      function()
      {
        $('#klizni-sis-al-img').attr('src', 'assets/klizni_sistemi.jpg')
      });

      $('#s560').hover(function()
      {
        $('#klizni-sis-al-img').attr('src', 'assets/klizni_sistemi/s560.jpg');
      },
      function()
      {
        $('#klizni-sis-al-img').attr('src', 'assets/klizni_sistemi.jpg')
      });

      $('#s700').hover(function()
      {
        $('#klizni-sis-al-img').attr('src', 'assets/klizni_sistemi/s700.png');
      },
      function()
      {
        $('#klizni-sis-al-img').attr('src', 'assets/klizni_sistemi.jpg')
      });

      $('#struct').hover(function()
      {
        $('#fasade').attr('src', 'assets/fasade-strukturalne/strukturalne-m3.png');
      },
      function()
      {
        $('#fasade').attr('src', 'assets/fasade.jpg')
      });

      $('#polu-struct').hover(function()
      {
        $('#fasade').attr('src', 'assets/fasade-nestrukturalne/m3-polu-struct.png');
      },
      function()
      {
        $('#fasade').attr('src', 'assets/fasade.jpg')
      });
  }

}
