import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sertifikati',
  templateUrl: './sertifikati.component.html',
  styleUrls: ['./sertifikati.component.css']
})
export class SertifikatiComponent implements OnInit {
  getProdData: any = [];

  constructor(private http: HttpClient,
    private _sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.http.get('http://5.79.70.193:3001/product/getsertifikat')
    .subscribe(
      (data) => {
        this.getProdData = data;

        this.getProdData.forEach(element => {
          element['slika'] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + element['slika']); console.log(element['slika']);
      });
      }
    );
  }

}
