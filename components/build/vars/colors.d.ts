import { IVar } from "../IVar";
import { VarBase } from "../VarBase";
export default class CssvilleColors {
    static hexToRgb(hex: string, alpha?: number): string;
    static text: VarBase;
    static border: VarBase;
    static shadow: VarBase;
    static basicColors: IVar[];
    static colorsPalette: IVar[];
    static colorsPalettePostfixValues: [string, string[]][];
}
