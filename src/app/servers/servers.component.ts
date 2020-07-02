import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

allowNewServer = false;
serverCreation = "server is not created";
serverName = "test Server";

userName = "";
  constructor() { 
	setTimeout(() => {
			this.allowNewServer= true
	}, 2000);
}

  ngOnInit(): void {
  }
onserverCreation (){
 this.serverCreation = "server is created " +  this.serverName;
}
onUpdateServerName(event:Event){
	this.serverName= (<HTMLInputElement>event.target).value;
}
}
