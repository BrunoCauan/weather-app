export default class City {
    name: string;
    country: string;
    temperature: number;
    icon: string;
    description: string;

    constructor(name: string, country: string, temperature: number, icon: string, description: string) {
        this.name = name;
        this.country = country;
        this.temperature = temperature;
        this.icon = icon;
        this.description = description;
    }
}