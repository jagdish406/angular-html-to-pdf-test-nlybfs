import { Component, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  @ViewChild('content') content: ElementRef;

  makePdf() {
    let doc = new jsPDF('p', 'mm', 'a4');
    doc.addHTML(this.content.nativeElement, function () {
      doc.save('jagdish-eee.pdf');
    });
  }
}
