import { Component, OnInit } from '@angular/core';
import { AccountListService } from './account-list.service';
import { Account } from './account';

@Component({
  selector: 'app-root',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account[];
  selectedIndex: number;
  displayInfo: boolean;

  constructor(private accountListService: AccountListService) { }

  ngOnInit() {
	this.accountListService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
      if(this.accounts.length>0) {
        this.selectedIndex=0;
      }
    });
    
    this.displayInfo=false;
	
  }

  clickUp() {
    if(this.displayInfo==true)
      return;
    this.selectedIndex=(this.selectedIndex-1);
    if( this.selectedIndex < 0 ) {
      this.selectedIndex=this.accounts.length+this.selectedIndex;
    }
  }

  clickDown() {
    if(this.displayInfo==true)
      return;
	this.selectedIndex=(this.selectedIndex+1)%this.accounts.length;
  }

  clickSelect() {
    if(this.displayInfo==true)
      return;
    setTimeout( () => {
      this.displayInfo=false;
    },5000);
    this.displayInfo=true;  
  }
}
