import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public usernames: string[] = [];
  public users$: BehaviorSubject<string[]> = new BehaviorSubject(
    this.usernames
  );

  constructor() {}

  addUser(username: string): void {
    this.usernames.push(username);
    this.users$.next(this.usernames);
  }
}
