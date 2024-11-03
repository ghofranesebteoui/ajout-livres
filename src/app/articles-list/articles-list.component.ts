import { Component } from '@angular/core';
import { Article } from '../models/article';
import { AjoutArticleComponent } from "../ajout-article/ajout-article.component";

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [AjoutArticleComponent],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent {
  title = "Liste des nouveaux articles :";
   Articles = [
    new Article(1,'pollution', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLMKNfwNSzSQHcvrUEtPItUKjZB8ErlwOgQ&s', '14/03/2014', 'La pollution atmosphérique tue 5,5 millions de personnes par an dans le monde (dont 2,6 millons de décès indirects) selon des chiffres 2016 de la Banque mondiale: elle est est devenue le quatrième facteur de décès prématuré sur Terre',0),
    new Article(2,'amour', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7XISV_ED6203eFUVBlWpWCknYBA61ERI_1Q&s','15/11/2023', 'L’amour, c’est la vie. Sans l’amour, la vie n’existerait pas. Le sentiment amoureux est avant tout fondé sur l’attente d’une rencontre. L’individu ne peut vivre de manière isolée, s’il n’était pas dans l’échange, il mourrait très rapidement. Les êtres humains se construisent dans une co-construction.',0),
    new Article(3,'développement personnel ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxrIt2i-MhKmPiaisqxI-0jwrGoK-v-yVxg&s', '20/08/2022', 'Le développement personnel fait partie de ces pratiques qui suscitent à la fois beaucoup d’intérêt et d’interrogation, voire de la suspicion ou de la méfiance. Le terme développement personnel renvoie à une grande variété d’ouvrages, de techniques et de pratiques qui touchent aussi bien l’univers des particuliers que celui des entreprises.',0),
  ];
  action = "";

  changeAction(action : string){
    this.action = action;
  }
  addArticle(Article:Article){
    this.Articles=[...this.Articles,Article];
    this.changeAction("");
  }
  addscore(Article :Article){
  Article.score++;
  }
  removescore(Article :Article){
    if (Article.score > 0) {
      Article.score--; 
  }
}
  TriArticles() {
  return this.Articles.sort((article1,article2) => article2.score - article1.score);
}
 filtrerArticle(titre :string):void{
      this.Articles = this.Articles.filter(b => b.titre.toLowerCase() ==titre.toLowerCase());
    }
}
