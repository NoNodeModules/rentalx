import { Category } from "../model/category";
import { ICategoriesRepositories, ICategoriesRepositoriesDTO } from "./ICategoriesRepositories";


class CategoriesRepositories  implements ICategoriesRepositories {
    private categories:  Category[];

    constructor(){
        this.categories = [];
    }

    create({name , description}: ICategoriesRepositoriesDTO) : void {
       const category = new Category();

        Object.assign(category , {
            name,
            description,
            created_at:new Date()
        })

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(category => category.name === name);
        return category;
    }
}

export { CategoriesRepositories };