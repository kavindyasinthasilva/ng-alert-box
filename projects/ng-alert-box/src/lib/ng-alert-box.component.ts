import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class NgAlertBoxComponent {

  constructor() {}


  public dialog({type, msg}: { type: any, msg: any }) {

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
