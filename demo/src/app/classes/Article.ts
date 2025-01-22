export class Article {
  id: number=Math.floor(Math.random()*10000000);// UUID ->
  title: string="";
  content: string="";
  createdAt?: Date=new Date();
  isPublished?: boolean=true;
  author: string="";
}
