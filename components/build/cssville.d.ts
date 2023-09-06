import { IGenerator } from "./IGenerator";
export default class Cssville {
    static generators: IGenerator[];
    static getCss(classes?: string[]): string;
}
