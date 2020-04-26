import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.scss']
})
export class UsersDisplayComponent implements OnInit {

  @Input()
  users;
  constructor() { }

  ngOnInit(): void {
  }
  convertToUpperCase(value: string) {
    return value.toUpperCase();
  }

}
