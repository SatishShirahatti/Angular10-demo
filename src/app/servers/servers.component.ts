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
serverCreated = false;
servers = ['server1', 'server2']

userName = "";
  constructor() { 
	setTimeout(() => {
			this.allowNewServer= true
	}, 2000);
}

  ngOnInit(): void {
  }
onserverCreation (){
this.serverCreated = true;
this.servers.push(this.serverName);
 this.serverCreation = "server is created " +  this.serverName;
}
onUpdateServerName(event:Event){
	this.serverName= (<HTMLInputElement>event.target).value;
}
}
