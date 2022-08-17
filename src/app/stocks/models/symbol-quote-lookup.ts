import { Stock } from "./stock";
import { SymbolModel } from "./symbol";

export interface SymbolQuoteLookup {
    symbol: SymbolModel;
    quote: Stock;
}