import { IGenerator } from "./IGenerator";
export default class Cssville {
    static breakpoints: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
    };
    static generators: IGenerator[];
    static getCss(classes?: string[]): string;
}
