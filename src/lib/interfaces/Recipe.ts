export interface Recipe {
    title: string;
    steps: Step[];
}

interface Step {
    step: number;
    ingredients: Ingredient[];
    instructions: string;
}

interface Ingredient {
    ingredient: string;
    measurement: string;
    metric: boolean;
    imperial: boolean;
}
