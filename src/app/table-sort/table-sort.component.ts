import { getLocaleDateTimeFormat, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-sort',
  templateUrl: './table-sort.component.html',
  styleUrls: ['./table-sort.component.css']
})
export class TableSortComponent implements OnInit {
  sortDir =1;
  searchText: string;
  constructor() {
    this.sortArr('name');
   }

  ngOnInit(): void {
  }
  candidate_data=[ 
    {"id": 11,"name": "Ash","department": "Finance","joining_date": "8/10/2016"},
    {"id": 12,"name": "John","department": "HR","joining_date": "01/01/2011"},
    { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "2/11/2019"},
    {"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": "07/07/2021"},
    { "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": "08/12/2010"},
    { "id": 17,"name": "Gare","department": "Development",  "joining_date": "06/04/2014"}, 
    { "id": 15, "name": "Barry",  "department": "Operations", "joining_date": "1/08/2014"},
    {"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": "05/10/2014"}, 
    {"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": "07/05/2011"},
    { "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": "08/08/2021"}
  ]

  onSortClick(event){
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortDir=-1;
    } else {
      classList.add('fa-chevron-up');
      classList.remove('fa-chevron-down');
      this.sortDir=1;
    }
    this.sortArr('name');
    this.sortJoiningDate('joining_date');
   
  }
  sortArr(colName:any){
    this.candidate_data.sort((a,b)=>{
      a.name= a[colName].toLowerCase();
      b.name= b[colName].toLowerCase();
      return a.name.localeCompare(b.name) * this.sortDir;
    });
  }

  sortJoiningDate(colJoin){
    return this.candidate_data.sort((a, b) => {
      return <any>new Date(b.joining_date) - <any>new Date(a.joining_date) * this.sortDir;
    });
  }

  removeAll(){
    let itemToBeRemove =  "Development" 
    let list = []
    for(let a of  this.candidate_data){
      if(a.department!=itemToBeRemove){
         list.push(a);
         console.log(list);
      }
      this.candidate_data = list;
    }

  }
  

  calculateExperiace(dateSent){
    let list = []
    for(let a of  this.candidate_data){
      let currentDate = new Date();
      dateSent = new Date(a.joining_date);
      let resuiltDate = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
    
        if(resuiltDate > 730){
          list.push(a);
         
        }
        console.log(list + "Date");
         
      }
      this.candidate_data = list;
 } 
 
 
}
