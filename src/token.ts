export type TokenType =
    | 'ILLEGAL'
    | 'EOF'
    | 'IDENT'
    | 'INT'
    | 'ASSIGN'
    | 'PLUS'
    | 'MINUS'
    | 'ASTERISK'
    | 'SLASH'
    | 'BANG'
    | 'LT'
    | 'GT'
    | 'EQ'
    | 'NOT_EQ'
    | 'COMMA'
    | 'COLON'
    | 'SEMICOLON'
    | 'LPAREN'
    | 'RPAREN'
    | 'LBRACE'
    | 'LBRACKET'
    | 'RBRACKET'
    | 'RBRACE'
    | 'FUNCTION'
    | 'LET'
    | 'TRUE'
    | 'FALSE'
    | 'IF'
    | 'ELSE'
    | 'RETURN'
    | 'STRING';

/** Keyword map, used to determine if a word is a keyword and its type */
const keywords: Record<string, TokenType> = {
    fn: 'FUNCTION',
    let: 'LET',
    true: 'TRUE',
    false: 'FALSE',
    if: 'IF',
    else: 'ELSE',
    return: 'RETURN',
};

export default class Token {
    static ILLEGAL: TokenType = 'ILLEGAL';
    static EOF: TokenType = 'EOF';

    // Identifiers + literals
    static IDENT: TokenType = 'IDENT';
    static INT: TokenType = 'INT';

    // operators
    static ASSIGN: TokenType = 'ASSIGN';
    static PLUS: TokenType = 'PLUS';
    static MINUS: TokenType = 'MINUS';
    static BANG: TokenType = 'BANG';
    static ASTERISK: TokenType = 'ASTERISK';
    static SLASH: TokenType = 'SLASH';
    static LT: TokenType = 'LT';
    static GT: TokenType = 'GT';
    static EQ: TokenType = 'EQ';
    static NOT_EQ: TokenType = 'NOT_EQ';

    // delimiters
    static COMMA: TokenType = 'COMMA';
    static COLON: TokenType = 'COLON';
    static SEMICOLON: TokenType = 'SEMICOLON';

    static LPAREN: TokenType = 'LPAREN';
    static RPAREN: TokenType = 'RPAREN';
    static LBRACE: TokenType = 'LBRACE';
    static RBRACE: TokenType = 'RBRACE';
    static LBRACKET: TokenType = 'LBRACKET';
    static RBRACKET: TokenType = 'RBRACKET';

    // keywords
    static FUNCTION: TokenType = 'FUNCTION';
    static LET: TokenType = 'LET';
    static TRUE: TokenType = 'TRUE';
    static FALSE: TokenType = 'FALSE';
    static IF: TokenType = 'IF';
    static ELSE: TokenType = 'ELSE';
    static RETURN: TokenType = 'RETURN';

    // string
    static STRING: TokenType = 'STRING';

    static lookupIdent(ident: string): TokenType {
        return keywords[ident] || 'IDENT';
    };

    type: TokenType;
    literal: string;

    constructor(type: TokenType, literal: string) {
        this.type = type;
        this.literal = literal;
    }
}