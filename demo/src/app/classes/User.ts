export class User {
  static counter = 0;
  id:number=0;
  name: string="";
  email: string="";
  password: string="";

  constructor(name: string="", email: string="", password: string="")  {
    if(!name || !email || !password) return;
    User.counter++
    this.id = User.counter;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

