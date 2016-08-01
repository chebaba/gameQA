import { Component } from '@angular/core';

import { Popover,NavController, NavParams,Page } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';
import {PopoverPage} from '../result/result';
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
  nextPageIndex:any;
	// pageCnt:any;
	// pageInfos=[];

  constructor(private nav: NavController, private confData: ConferenceData, private navParams:NavParams) {
  	// let aa = confData.getContents(navParams.data);
  	// this.pageInfo2 = aa[1];
  	this.pageInfo = navParams.data;
  	var pageCnt = navParams.data.soft;
    this.nextPageIndex = pageCnt;

	  confData.getContents(pageCnt).then(nextPage=>{
  		this.nextPageInfo = nextPage;
  	});
  }

  nextPage(){
    this.choice();
    if (this.nextPageIndex == 5){
      this.presentPopover(event,this.confData);
    } else {
    	this.nav.push(NewPage, this.nextPageInfo);
    }
  }

  choice(){

    var choiceIndex = 0;
    this.confData.setCheckAndTrue(this.nextPageIndex - 1,choiceIndex);
    // confData.setCheckAndTrue(this.pageInfo.soft,1)
    //获得选择的选项并记录到对象的相对数据中
        // cont_json[i-1].checked = $('.z2 .cont .checkbox').index($(this));
        // if(cont_json[i-1].checked==cont_json[i-1].true) cont_json[i-1].istrue=1;
        // $(this).find($('.checked')).show();
        // $(this).siblings().find($('.checked')).hide();
        // $('.z2 button.next_question').css('display','block');
  }

    presentPopover(ev,confData: ConferenceData) {
      var resultPage; 

      var allQuestions;
      var temp=0;

      // allQuestions = confData.getContentsAll();
      confData.getContentsAll().then(result=>{
         // this.nextPageInfo=result;
         allQuestions = result;
        for(var i = 0;i<5;i++){
          if(allQuestions[i].istrue==1) 
            temp++;
        }
       var score = temp*20;


        if(score<40) {
          resultPage = {"score":score,"img":'image/answer_result_1.png'};
        }
        else{
          resultPage = {"score":score,"img":'image/answer_result_2.png'};
        }
        // 创建结果页
        let popover = Popover.create(PopoverPage, resultPage);
        this.nav.present(popover,{ev:ev});
      });
      

  }

}
