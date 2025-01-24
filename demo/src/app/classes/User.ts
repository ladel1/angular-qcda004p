export class User {

  id:number=0;
  name: string="";
  email: string="";
  password: string="";

  constructor(name: string="", email: string="", password: string="",id:number=0)  {
    // if(!name || !email || !password) return;
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

