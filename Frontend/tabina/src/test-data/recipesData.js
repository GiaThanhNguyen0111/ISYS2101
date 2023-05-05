import food from '../Image/img/recipe/salmon.jpg'
import salmon from '../Image/img/recipe/IgSalmon.png'
import butter from '../Image/img/recipe/IgButter.png'
import oliveOil from '../Image/img/recipe/IgOliveOil.png'
import parsley from '../Image/img/recipe/IgParsley.png'
import pepper from '../Image/img/recipe/IgPepper.png'
import salt from '../Image/img/recipe/IgSalt.png'
import lemon from '../Image/img/recipe/IgLemon.png'

export default [
    // {
    //     id: String,
    //     name: String,
    //     image: String,
    //     rating: integer, 1 - 5
    //     level: integer, 1 - 5
    //     ingredient: [], list of name only 
    //     nutrition: [] // list of nutrition (magnesium - calories - etc.)

    // }
    {
        id: 5,
        title: "SAUTÉ BUTTER SALMON",
        image: food,
        rating: 4,
        prepTime: '20 mins',
        cookingTime: '20 to 40 mins',
        difficulty: 'Expert',
        ingredientList: [
            {
                ingredient: {
                    name: 'Salmon',
                    image: salmon,
                    description: 'This is salmon',
                    nutrition: 208
                },
                amount: '180 g'
            },
            {
                ingredient: {
                    name: 'Butter',
                    image: butter,
                    description: 'This is butter',
                    nutrition: 716
                },
                amount: '90 g'
            },
            {
                ingredient: {
                    name: 'Olive Oil',
                    image: oliveOil,
                    description: 'This is olive oil',
                    nutrition: 884
                },
                amount: '30 g'
            },
            {
                ingredient: {
                    name: 'Parsley',
                    image: parsley,
                    description: 'This is parsley',
                    nutrition: 36
                },
                amount: '30 g'
            },
            {
                ingredient: {
                    name: 'Lemon',
                    image: lemon,
                    description: 'This is lemon',
                    nutrition: 28
                },
                amount: '100 g'
            },
            {
                ingredient: {
                    name: 'Black pepper',
                    image: pepper,
                    description: 'This is black pepper',
                    nutrition: 17
                },
                amount: '5 g'
            },
            {
                ingredient: {
                    name: 'Salt',
                    image: salt,
                    description: 'This is salt',
                    nutrition: 0
                },
                amount: '10 g'
            },
        ]
    },
    {
        id: 1,
        title: "Spicy Chicken Pasta",
        image: "https://source.unsplash.com/800x600/?chicken,pasta",
        rating: 5,
        prepTime: '20 mins',
        cookingTime: '20 to 40 mins',
        difficulty: 'Intermediate',
    },
    {
        id: 2,
        title: "Cheeseburger Sliders",
        image: "https://source.unsplash.com/800x600/?burger,sliders",
        rating: 4,
        prepTime: '18 mins',
        cookingTime: '20 to 60 mins',
        difficulty: 'Expert',
    },
    {
        id: 3,
        title: "Chocolate Chip Cookies",
        image: "https://source.unsplash.com/800x600/?cookies,chocolate",
        rating: 4,
        prepTime: '10 mins',
        cookingTime: '30 mins',
        difficulty: 'Beginner',
    },
    {
        id: 4,
        title: "Chocolate Chip Cookies",
        image: "https://source.unsplash.com/800x600/?cookies,chocolate",
        rating: 3,
        prepTime: '20 mins',
        cookingTime: '20 to 40 mins',
        difficulty: 'Intermediate',
    },
  ];
  