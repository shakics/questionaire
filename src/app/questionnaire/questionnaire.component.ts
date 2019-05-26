import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, FormGroup} from '@angular/forms';
import { CommonService } from '../services/common/common.service';
import { environment } from '../../environments/environment';
import { StorageService } from '../services/storage/storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  public questions:any;
  public questionsss:any;
  public question:any;
  public loadQuestion:boolean=true;
  public showQuestion:boolean=false;
  public showsubQuestion:boolean=false;
  public showsubQuestion2:boolean=false;
  private studentAddForm : FormGroup;
  constructor( private localStorage: StorageService,private router: ActivatedRoute,private Router: Router,public common: CommonService
    
    ) { 
      // 
  }
  // Submit student details form
  doRegister(){
    // this.studentAddForm.value;
    // if (this.index && this.index != null && this.index != undefined) {
    //   this.studentAddForm.value.id = this.index
    // }else{
    //   this.index = null;
    // }
    // let studentRegister = this.studentService.doRegisterStudent(this.studentAddForm.value, this.index);
    // if(studentRegister) {
    //   if (studentRegister.code == 200) {
    //     this.toastr.success(studentRegister.message,"Success");
    //     this.router.navigate(['/']);
    //   }else{
    //     this.toastr.error(studentRegister.message,"Failed");
    //   }
    // }
  }

  ngOnInit() {
    // alert('1')
  }

  onClick1(){
    this.showQuestion=true;
    this.loadQuestion=false;
    this.question = [
      // {'question': 'Is Your name is usman', 'Answer': ['Yes', 'No'],'sub_question':[{'question':'Are you Web Developer','Answer':['Yes','No']}]},
      {'question': 'Are Your Hungry', 'Answer': ['Yes', 'No'],'sub_question':[{'question':'What Would you like to eat?','Answer':['Pizza','Chicken'],'sub_question2':[{'question':'Would you like to pizza with mashroom?','Answer':['Yes','No'],'stop':'OK,I will order for you.'}],'stop':'Nice,I will order for you.'}],'stop':'OK Call me, When you are hungry.'}
    ];
  }

onClick2(res){
  if(res=='Yes'){
    this.showsubQuestion=true;
  }else{
    this.showsubQuestion=false;
  }

  }
  onClick3(res){
  if(res=='Pizza'){
    this.showsubQuestion2=true;
  }else{
    this.showsubQuestion2=false;
  }

  }
  submit(res){
  console.log(res)

  }

}
