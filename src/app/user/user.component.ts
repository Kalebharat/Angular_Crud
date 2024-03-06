import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
   userform:any;
  constructor(private fb:FormBuilder,private sb:ApiService){
  this.userform=this.fb.group({
    name:[''],
    email:[''],
    number:[''],
    password:['']
  })
  }
  ngOnInit(){
this.apigetdata()
  }

  showdata(){
    let type=this.userform.value.id==null?'add':'update';
    this.sb.postdata(this.userform.value,type).subscribe(data=>{
      if(type=='add'){
        alert('data added')
      }else{
        alert('updated')
      }
      console.log(data);
      })
      console.log(this.userform.value)
    this.apigetdata();
    this.userform.reset()
    window.location.reload()
      
  }
  userdata:any;
  apigetdata(){
    this.sb.getdata().subscribe(data=>{
      console.log(data);
      this.userdata=data;
    })
  }
  delete(i:any){
    this.sb.deletedata(i).subscribe(data=>{
      alert('you are shore delete record')
      console.log(data);
      window.location.reload()
      
      
    })
  }
  Edit(id:any){
    this.sb.updatadata(id).subscribe((data:any): void=>{
      alert('user data get.');
      console.log( "user data" ,data);
     this.userform.patchValue({
    name:data.name,
    email:data.email,
    number:data.number,
    password:data.password

     })
      
    })
  }
}
function data(value: Object): void {
  throw new Error('Function not implemented.');
}

