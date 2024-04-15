import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../app.component.scss', './about.component.scss'],
})
export class AboutComponent {
  aboutCards = [
    {
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXOG-yZ3klRiG1Xiiy-4VpbPoosUuOVRXx7dM039m7nxgXd09f1EQ1u6XKNg_-cDEKzuARE11U_7CfjSGjf0llRXCHXUfsTSphvbBuupabiGMaGYIb66MIux9VmCET9hY4fIqyDA3KlYQ/s1600/La+marca+del+producto+Definici%25C3%25B3n%252C+clasificaci%25C3%25B3n%252C+c%25C3%25B3mo+nacen+y+m%25C3%25A1s.jpg',
      title: 'Product description',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sed libero suscipit hic accusamus. Reiciendis facilis temporibus voluptatum minima dolorem eaque animi ipsam distinctio, provident ab quae ut? Repellendus, error. Odio blanditiis laudantium atque beatae neque delectus molestiae iure voluptas quisquam quae, dolorum numquam, reprehenderit repudiandae similique adipisci at ea voluptatem soluta nesciunt ipsa, natus consectetur. Facilis quos voluptas officiis!',
    },
    {
      img: 'https://info.mercadona.es/img-cont/es/juan-roig-recibe-al-presidente-de-la-republica-portuguesa-marcelo-rebelo-de-sousa-en-el-primer-supermercado-de-mercadona-en-portugal-red.jpg',
      title: 'Team description',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sed libero suscipit hic accusamus. Reiciendis facilis temporibus voluptatum minima dolorem eaque animi ipsam distinctio, provident ab quae ut? Repellendus, error. Odio blanditiis laudantium atque beatae neque delectus molestiae iure voluptas quisquam quae, dolorum numquam, reprehenderit repudiandae similique adipisci at ea voluptatem soluta nesciunt ipsa, natus consectetur. Facilis quos voluptas officiis!',
    },
  ];
}
