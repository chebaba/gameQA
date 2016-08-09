import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NewPage} from '../new-page/new-page';
import {ConferenceData } from '../../providers/conference-data';
import {PopoverPage} from '../result/result';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  testRadioOpen: boolean;
  testRadioResult;

	nextPageInfo:any;
	questionNo = 0;

  constructor(private navCtrl: NavController, confData: ConferenceData) {
  	confData.getContents(this.questionNo).then(nextPage=>{
  		this.nextPageInfo = nextPage;
  	});
  }
  nextPage(){
  	this.navCtrl.push(NewPage, this.nextPageInfo);
  } 
}