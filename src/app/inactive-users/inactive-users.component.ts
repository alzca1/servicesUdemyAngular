import { Component, Input } from "@angular/core";
import { UsersService } from "../usersService.service";
import {CounterService} from '../counterService.service'

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Input() inactiveTimes: number; 

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  
  }

  ngDoCheck(){
    this.inactiveTimes = this.counterService.inactives;
    console.log('inactives changed!')
  }
}
