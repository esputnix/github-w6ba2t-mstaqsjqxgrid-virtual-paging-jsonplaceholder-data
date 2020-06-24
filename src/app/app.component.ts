import { Component, ElementRef, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;  

  columns: any[] =
  [
    { text: 'Id', datafield: 'id', width: 50 },
    { text: 'Full Name', datafield: 'name', width: 120 },
    { text: 'User Name', datafield: 'username', width: 120 },
    { text: 'Email', datafield: 'email', width: 180 },
    { text: 'Phone', datafield: 'phone', width: 100, cellsalign: 'right' },
    { text: 'Website URL', datafield: 'website', width: 100, cellsalign: 'right', cellsformat: 'c2' }
  ];

  source: any =
  {
    datatype: 'json',
    url: "https://jsonplaceholder.typicode.com/users",
    cache: false,
    datafields: []
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  rendergridrows = (params: any): any[] => {
    console.log("...3 rendergridrows", params);
    return params.data;
  }


  onCellClick(event: any): void | boolean { 
    // console.dir(this.myGrid);

    let rowindex =  event.args.rowindex;
    console.log("rowindex:", rowindex);

    let dataindex = this.myGrid.getrowid(rowindex)
    console.log("dataindex:", dataindex);
   
  }


}