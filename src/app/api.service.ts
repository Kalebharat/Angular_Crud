import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postdata(data:any,type:any){
    if(type=='add'){
  return  this.http.post("  http://localhost:3000/posts",data);
    }
else{
  return  this.http.put("  http://localhost:3000/posts",data.id,data);
}

  }
  getdata(){
   return this.http.get(" http://localhost:3000/posts");
  }

  deletedata(id:any){
  return  this.http.delete(" http://localhost:3000/posts/"+ id);
  }
  updatadata(id:any){
    return this.http.get(" http://localhost:3000/posts/"+ id);
  }
}
