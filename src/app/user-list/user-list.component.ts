import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "../shared/services/user-service.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[];
  public subscription: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.users$.subscribe((users: string[]) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
