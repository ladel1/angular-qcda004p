export class Article {
  static compteur = 0;
  id: number=0;
  title: string="";
  content: string="";
  createdAt: Date=new Date();
  isPublished: boolean=true;
  author: string="";

  constructor(title:string,content:string,author:string) {
    if(!title || !content || !author) return;

    Article.compteur++;
    // auto increment id
    this.id=Article.compteur;
    // attr = param
    this.title=title;
    this.content=content;
    this.author=author;
    // par defaut
    this.isPublished=true;
    this.createdAt=new Date;
  }
}
