import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class NgAlertBoxComponent implements  OnInit {

  constructor() {}

  ngOnInit(){

  }

  public  msgAlert(type : any, msg : any){

    if(type.toUpperCase() == 'S'){
      document.getElementsByClassName('msg-data')[0].innerHTML = '<div class="alert alert-success">'+msg+'</div>';
    }else if(type.toUpperCase() == 'E'){
      document.getElementsByClassName('msg-data')[0].innerHTML = '<div class="alert alert-danger">'+msg+'</div>';
    }else if(type.toUpperCase() == 'W'){
      document.getElementsByClassName('msg-data')[0].innerHTML = '<div class="alert alert-warning">'+msg+'</div>';
    }

    setTimeout(()=>{ document.getElementsByClassName('msg-data')[0].innerHTML = ''; }, 3000);

  }

  public dialog(type : any, msg : any){

    if (type.toUpperCase() == 'S') {
      swal("Success!", msg, "success");
    } else if (type.toUpperCase() == 'E') {
      swal("Error!", msg, "error");
    } else if (type.toUpperCase() == 'W') {
      swal("Warning!", msg, "warning");
    } else if (type.toUpperCase() == 'I') {
      swal("Info!", msg, "info");
    }

  }

}
