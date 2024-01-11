export default class Task {
    #name;
    #description;

    static createFromObject(obj) {
        return new Task(obj.name, obj.description);
    }

    constructor(name, description) {
        this.#name = name;
        this.#description = description;
    }

    getFullInfo() {
        return this.#name + ' ' + this.#description;
    }

    toJSON() {
        return {
            name: this.#name,
            description: this.#description
        }
    }
}