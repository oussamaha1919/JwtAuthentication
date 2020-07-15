import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from 'src/User';





@Injectable({
  providedIn: 'root'
})

export class AuthService {
private  user$ =new Subject <User>() ;

  constructor() { }


  login(email:string,password:string){
    const logincred ={email,password};
    console.log('login credentials ',   logincred  )

   return of (logincred);
  }
  logout(){
    // remove user from suject 
    this.setUser(null);
    console.log(`Logout succes`);

  }


  get user(){
    return this.user$.asObservable();
  }

  
  register(user:any)
  {
    //make api call to save user in db 
    //update the user subject 
    this.setUser(user);
    console.log(`register succes`,user);
    return of(user);
  }
  private setUser(user)
  {
    this.user$.next(user);
    
  }



}
