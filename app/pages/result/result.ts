import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';

import {ConferenceData } from '../../providers/conference-data';
/*
  Generated class for the ResultPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/result/result.html'
})
export class PopoverPage {
	pageInfo=0;
  pageinfoPop:any;
  testText;

  constructor(private nav: NavController, confData: ConferenceData,param:NavParams) {
  	
	this.pageinfoPop = param.data;
  }

}