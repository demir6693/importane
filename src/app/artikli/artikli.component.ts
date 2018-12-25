import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artikli',
  templateUrl: './artikli.component.html',
  styleUrls: ['./artikli.component.css']
})
export class ArtikliComponent implements OnInit {

  getGroupData: any;
  getProdData: any = [];
  imagePath: any;
  url_params: any;

  constructor(private http: HttpClient,
    private _sanitizer: DomSanitizer,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.url_params = this.route.snapshot.paramMap.get('name');
    
    this.http.get('http://5.79.70.193:3001/product/getchgropu/' + this.url_params)
    .subscribe(
      (data) => {
        this.getGroupData = data;
        this.http.get('http://5.79.70.193:3001/product/getprod/' + data[0]['id'])
        .subscribe(
            (data) => {
            this.getProdData = data;

            this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                    + this.getProdData[0]['slike']);

            this.getProdData.forEach(element => {
                  element['slike'] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                  + element['slike']);
              });
        
            }
          );
      }
    );
  }

}
