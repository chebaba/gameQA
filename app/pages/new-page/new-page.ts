import { Component } from '@angular/core';

import { NavController, NavParams,Page } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';
/*
  Generated class for the NewPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/new-page/new-page.html',
})
export class NewPage {
	pageInfo: any;
	nextPageInfo:any;
	// pageCnt:any;
	// pageInfos=[];

  constructor(private nav: NavController, private confData: ConferenceData, private navParams:NavParams) {
  	// let aa = confData.getContents(navParams.data);
  	// this.pageInfo2 = aa[1];
  	this.pageInfo = navParams.data;
  	var pageCnt = navParams.data.soft;

	confData.getContents(pageCnt).then(confData1=>{
  		this.nextPageInfo=confData1;
  	});
  }

  nextPage(){
  	this.nav.push(NewPage, this.nextPageInfo);
  }

  choice(){
    //获得选择的选项并记录到对象的相对数据中
        // cont_json[i-1].checked = $('.z2 .cont .checkbox').index($(this));
        // if(cont_json[i-1].checked==cont_json[i-1].true) cont_json[i-1].istrue=1;
        // $(this).find($('.checked')).show();
        // $(this).siblings().find($('.checked')).hide();
        // $('.z2 button.next_question').css('display','block');
  }

}
