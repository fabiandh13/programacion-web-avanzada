export class Header{
    constructor(private title: string){}

    render(): string {
        return `<h1>${this.title}</h1>`;
    }
}