export interface Recipe {
  id: number;            // унікальний ідентифікатор рецепта
  title: string;         // назва страви
  description: string;   // короткий опис
  imageUrl: string;      // шлях або посилання на картинку
  ingredients: string[]; // список інгредієнтів
  tags?: string[];   // теги
}
