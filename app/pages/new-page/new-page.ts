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
  public dataObject;

  constructor(private nav: NavController, private confData: ConferenceData, private navParams:NavParams) {

  	this.pageInfo = navParams.data;
    // 选项情况初期载入
    var checked = navParams.data.checked;
    this.dataObject={"option1":false,"option2":false,"option3":false,"option4":false,"button":true};
    switch(checked){
      case"0":
      this.dataObject.option1=true;
      this.dataObject.button=false;
      break;
      case"1":this.dataObject.option2=true;
      this.dataObject.button=false;
      break;
      case"2":this.dataObject.option3=true;
      this.dataObject.button=false;
      break;
      case"3":this.dataObject.option4=true;
      this.dataObject.button=false;
      break;
      default:
    }
    // 下一题信息载入
    var nextPageCnt = navParams.data.soft;
    this.nextPageIndex = nextPageCnt;

	  confData.getContents(nextPageCnt).then(nextPage=>{
  		this.nextPageInfo = nextPage;
  	});

  }

  nextPage(){
    if (this.nextPageIndex == 5){
      this.presentPopover(event,this.confData);
    } else {
    	this.nav.push(NewPage, this.nextPageInfo);
    }
  }

  choice(ev){
    var choiceIndex = ev.currentTarget.attributes[0].value;
    this.confData.setCheckAndTrue(this.nextPageIndex - 1,choiceIndex);
    this.dataObject.button=false;
  }

  presentPopover(ev,confData: ConferenceData) {
    var resultPage; 

    var allQuestions;
    var temp=0;

    confData.getContentsAll().then(result=>{

      allQuestions = result;
      for(var i = 0;i<5;i++){
        if(allQuestions[i].istrue==1) 
          temp++;
      }
     var score = temp*20;


      if(score<40) {
        resultPage = {"score":score,"img":'image/answer_result_1.png',"correct":temp};
      }
      else if(score>=40&&score<=80){
        resultPage = {"score":score,"img":'image/answer_result_2.png',"correct":temp};          
      }
      else{
        resultPage = {"score":score,"img":'image/answer_result_3.png',"correct":temp};
      }

      this.nav.push(PopoverPage, resultPage);
    });
  }

}
