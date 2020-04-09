import { Component, Input } from "@angular/core";
import { UsersService } from "../usersService.service";
import {CounterService} from '../counterService.service'

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Input() activeTimes: number; 
  
  constructor(private usersService: UsersService, private counterService: CounterService) {}

  
  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }

  ngDoCheck(){
    this.activeTimes = this.counterService.actives;
    console.log('actives changed!')
  }
}
