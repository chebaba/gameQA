import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NewPage} from '../new-page/new-page';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	nextPageInfo:any;
	questionNo=0;
  constructor(private navCtrl: NavController, confData: ConferenceData) {
  	confData.getContents(this.questionNo).then(confData2=>{
  		this.nextPageInfo=confData2;
  	});
  }
  nextPage(){
  	this.navCtrl.push(NewPage, this.nextPageInfo);
  }
}
