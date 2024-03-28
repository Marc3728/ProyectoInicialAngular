export class DataJson {
  static getJsonData(): any {
    return [
      {
        product: 'Tomaco',
        price: 1.2,
        currency: '€',
        rating: 4.8,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
        img: 'Tomaco.png',
        similarProducts: [
          {
            product: 'Coffee',
            price: 2.5,
            currency: '€',
            rating: 2.8,
            description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            img: 'Coffee.png',
          },
          {
            product: 'Energy Milk',
            price: 2,
            currency: '€',
            rating: 3.5,
            description:
              'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
            img: 'Energy-milk.png',
          },
          {
            product: 'Natilla',
            price: 2.4,
            currency: '€',
            rating: 5,
            description:
              'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
            img: 'Natilla.png',
          },
        ],
        reviews: [
          {
            image: '',
            name: 'Homer J. Simpson',
            rating: 5,
            opinion:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            date: 'Ayer por la tarde, 2023',
          },
          {
            image: '',
            name: 'Marge Simpson',
            rating: 4,
            opinion:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
            date: 'La semana pasada, 2023',
          },
        ],
      },
      {
        product: 'Coffee',
        price: 2.5,
        currency: '€',
        rating: 2.8,
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
        img: 'Coffee.png',
        similarProducts: [
          {
            product: 'Energy Milk',
            price: 2,
            currency: '€',
            rating: 3.5,
            description:
              'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
            img: 'Energy-milk.png',
          },
          {
            product: 'Natilla',
            price: 2.4,
            currency: '€',
            rating: 5,
            description:
              'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
            img: 'Natilla.png',
          },
          {
            product: 'Tomaco',
            price: 1.2,
            currency: '€',
            rating: 4.8,
            description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
            img: 'Tomaco.png',
          },
        ],
        reviews: [
          {
            image: '',
            name: 'P. Escobar',
            rating: 5,
            opinion:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            date: 'Ayer por la tarde, 2023',
          },
          {
            image: '',
            name: 'M.A. Nestle',
            rating: 2,
            opinion:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
            date: 'La semana pasada, 2023',
          },
        ],
      },
      {
        product: 'Natilla',
        price: 2.4,
        currency: '€',
        rating: 5,
        description:
          'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
        img: 'Natilla.png',
        similarProducts: [
          {
            product: 'Energy Milk',
            price: 2,
            currency: '€',
            rating: 3.5,
            description:
              'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
            img: 'Energy-milk.png',
          },
          {
            product: 'Tomaco',
            price: 1.2,
            currency: '€',
            rating: 4.8,
            description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
            img: 'Tomaco.png',
          },
        ],
        reviews: [
          {
            image: '',
            name: 'Stan Marsh',
            rating: 1,
            opinion:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            date: 'Ayer por la tarde, 2023',
          },
          {
            image: '',
            name: 'Randy Marsh',
            rating: 5,
            opinion:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.',
            date: 'primer día, 2023',
          },
        ],
      },
      {
        product: 'Energy Milk',
        price: 2,
        currency: '€',
        rating: 3.5,
        description:
          'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ',
        img: 'Energy-milk.png',
        similarProducts: [],
        reviews: null,
      },
    ];
  }
}
