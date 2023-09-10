import { IGenerator } from "./IGenerator";
import { IVar } from "./IVar";
export default class Cssville {
    static generators: IGenerator[];
    static variables: IVar[][];
    static getCss(classes?: string[]): string;
}
