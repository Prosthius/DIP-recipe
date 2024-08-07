import type { RequestHandler } from './$types';
import type { Recipes } from '$lib/interfaces/Recipes';


export const GET: RequestHandler = async (id: number) => {
    let recipes: Recipes[] = [
        {
            "id": 0,
            "title": "Chocolate Cake",
            "Recipe": [
                {
                    "title": "Chocolate Cake",
                    "steps": [
                        {
                            "step": 1,
                            "ingredients": [
                                {
                                    "ingredient": "Flour",
                                    "measurement": "2 cups",
                                    "metric": true,
                                    "imperial": false
                                },
                                {
                                    "ingredient": "Cocoa Powder",
                                    "measurement": "1 cup",
                                    "metric": true,
                                    "imperial": false
                                }
                            ],
                            "instructions": "Sift together flour and cocoa powder."
                        },
                        {
                            "step": 2,
                            "ingredients": [
                                {
                                    "ingredient": "Sugar",
                                    "measurement": "1.5 cups",
                                    "metric": true,
                                    "imperial": false
                                },
                                {
                                    "ingredient": "Butter",
                                    "measurement": "200 grams",
                                    "metric": true,
                                    "imperial": false
                                }
                            ],
                            "instructions": "Cream together sugar and butter."
                        },
                        {
                            "step": 3,
                            "ingredients": [
                                {
                                    "ingredient": "Eggs",
                                    "measurement": "3",
                                    "metric": true,
                                    "imperial": true
                                }
                            ],
                            "instructions": "Add eggs one at a time, beating well after each addition."
                        },
                        {
                            "step": 4,
                            "ingredients": [
                                {
                                    "ingredient": "Milk",
                                    "measurement": "1 cup",
                                    "metric": true,
                                    "imperial": false
                                }
                            ],
                            "instructions": "Alternate adding flour mixture and milk to the batter."
                        },
                        {
                            "step": 5,
                            "ingredients": [],
                            "instructions": "Pour batter into prepared pans and bake at 350°F (175°C) for 30-35 minutes."
                        }
                    ]
                }
            ]
        },
        {
            "id": 1,
            "title": "Spaghetti Bolognese",
            "Recipe": [
                {
                    "title": "Spaghetti Bolognese",
                    "steps": [
                        {
                            "step": 1,
                            "ingredients": [
                                {
                                    "ingredient": "Olive Oil",
                                    "measurement": "2 tablespoons",
                                    "metric": true,
                                    "imperial": false
                                },
                                {
                                    "ingredient": "Onion",
                                    "measurement": "1",
                                    "metric": true,
                                    "imperial": true
                                }
                            ],
                            "instructions": "Heat olive oil in a pan and sauté chopped onion until translucent."
                        },
                        {
                            "step": 2,
                            "ingredients": [
                                {
                                    "ingredient": "Garlic",
                                    "measurement": "2 cloves",
                                    "metric": true,
                                    "imperial": true
                                },
                                {
                                    "ingredient": "Ground Beef",
                                    "measurement": "500 grams",
                                    "metric": true,
                                    "imperial": false
                                }
                            ],
                            "instructions": "Add minced garlic and ground beef to the pan, cook until browned."
                        },
                        {
                            "step": 3,
                            "ingredients": [
                                {
                                    "ingredient": "Tomato Sauce",
                                    "measurement": "2 cups",
                                    "metric": true,
                                    "imperial": false
                                },
                                {
                                    "ingredient": "Tomato Paste",
                                    "measurement": "2 tablespoons",
                                    "metric": true,
                                    "imperial": false
                                }
                            ],
                            "instructions": "Stir in tomato sauce and tomato paste."
                        },
                        {
                            "step": 4,
                            "ingredients": [
                                {
                                    "ingredient": "Salt",
                                    "measurement": "1 teaspoon",
                                    "metric": true,
                                    "imperial": false
                                },
                                {
                                    "ingredient": "Pepper",
                                    "measurement": "1 teaspoon",
                                    "metric": true,
                                    "imperial": false
                                }
                            ],
                            "instructions": "Season with salt and pepper, simmer for 20 minutes."
                        },
                        {
                            "step": 5,
                            "ingredients": [
                                {
                                    "ingredient": "Spaghetti",
                                    "measurement": "400 grams",
                                    "metric": true,
                                    "imperial": false
                                }
                            ],
                            "instructions": "Cook spaghetti according to package instructions."
                        },
                        {
                            "step": 6,
                            "ingredients": [],
                            "instructions": "Serve sauce over spaghetti."
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "title": "Caesar Salad",
            "Recipe": [
                {
                    "title": "Caesar Salad",
                    "steps": [
                        {
                            "step": 1,
                            "ingredients": [
                                {
                                    "ingredient": "Romaine Lettuce",
                                    "measurement": "1 head",
                                    "metric": true,
                                    "imperial": true
                                }
                            ],
                            "instructions": "Chop romaine lettuce."
                        },
                        {
                            "step": 2,
                            "ingredients": [
                                {
                                    "ingredient": "Croutons",
                                    "measurement": "1 cup",
                                    "metric": true,
                                    "imperial": false
                                }
                            ],
                            "instructions": "Add croutons to the lettuce."
                        },
                        {
                            "step": 3,
                            "ingredients": [
                                {
                                    "ingredient": "Parmesan Cheese",
                                    "measurement": "1/2 cup",
                                    "metric": true,
                                    "imperial": false
                                }
                            ],
                            "instructions": "Sprinkle grated Parmesan cheese over the salad."
                        },
                        {
                            "step": 4,
                            "ingredients": [
                                {
                                    "ingredient": "Caesar Dressing",
                                    "measurement": "1/2 cup",
                                    "metric": true,
                                    "imperial": false
                                }
                            ],
                            "instructions": "Drizzle Caesar dressing over the salad and toss to combine."
                        },
                        {
                            "step": 5,
                            "ingredients": [
                                {
                                    "ingredient": "Chicken Breast",
                                    "measurement": "2",
                                    "metric": true,
                                    "imperial": true
                                }
                            ],
                            "instructions": "Grill chicken breasts, slice, and add to the salad."
                        }
                    ]
                }
            ]
        }
    ];

    return new Response(JSON.stringify(recipes));
};