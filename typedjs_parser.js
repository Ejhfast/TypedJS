/* Jison generated parser */
var typedjs_parser = (function(){

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"BEGIN":4,"VAR":5,"::":6,"arg_list":7,"EOF":8,"e":9,"->":10,"primitive":11,"string":12,"char":13,"number":14,"boolean":15,"tuple":16,"(":17,")":18,"object":19,"{":20,"}":21,"list":22,"[":23,"]":24,"or":25,"|":26,",":27,":":28,"$accept":0,"$end":1},
terminals_: {2:"error",4:"BEGIN",5:"VAR",6:"::",8:"EOF",10:"->",12:"string",13:"char",14:"number",15:"boolean",17:"(",18:")",20:"{",21:"}",23:"[",24:"]",26:"|",27:",",28:":"},
productions_: [0,[3,5],[7,1],[7,3],[11,1],[11,1],[11,1],[11,1],[16,3],[19,3],[22,3],[22,3],[22,3],[22,3],[22,3],[25,3],[9,3],[9,1],[9,1],[9,1],[9,1],[9,1],[9,3],[9,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:return '{"func":"' + $$[$0-3] + '","args":[' +$$[$0-1] + ']}';
break;
case 2:this.$ = $$[$0];
break;
case 3:this.$ = $$[$0-2] +"," + $$[$0];
break;
case 4:this.$ = '"string"';
break;
case 5:this.$ = '"char"';
break;
case 6:this.$ = '"number"';
break;
case 7:this.$ = '"boolean"';
break;
case 8:this.$ = "["+$$[$0-1]+"]";
break;
case 9:this.$ = "{"+$$[$0-1]+"}";
break;
case 10:this.$ = '{"array":' + $$[$0-1] + '}';
break;
case 11:this.$ = '{"array":' + $$[$0-1] + '}';
break;
case 12:this.$ = '{"array":' + $$[$0-1] + '}';
break;
case 13:this.$ = '{"array":' + $$[$0-1] + '}';
break;
case 14:this.$ = '{"array":{"or":[' + $$[$0-1] + ']}}'; 
break;
case 15:this.$ = $$[$0-2] + ',' + $$[$0];
break;
case 16:this.$ = $$[$0-2]+','+$$[$0];
break;
case 17:this.$ = '{"or":[' + $$[$0] + ']}';
break;
case 22:this.$ = $$[$0-2] +':'+ $$[$0];
break;
case 23:this.$ = '"' + String(yytext) + '"';
break;
}
},
table: [{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:[1,4]},{5:[1,12],7:5,9:6,11:11,12:[1,16],13:[1,17],14:[1,18],15:[1,19],16:9,17:[1,14],19:8,20:[1,13],22:10,23:[1,15],25:7},{8:[1,20],10:[1,21]},{8:[2,2],10:[2,2],26:[1,24],27:[1,22],28:[1,23]},{8:[2,17],10:[2,17],18:[2,17],21:[2,17],24:[2,17],26:[2,17],27:[2,17],28:[2,17]},{8:[2,18],10:[2,18],18:[2,18],21:[2,18],24:[2,18],26:[2,18],27:[2,18],28:[2,18]},{8:[2,19],10:[2,19],18:[2,19],21:[2,19],24:[2,19],26:[2,19],27:[2,19],28:[2,19]},{8:[2,20],10:[2,20],18:[2,20],21:[2,20],24:[2,20],26:[2,20],27:[2,20],28:[2,20]},{8:[2,21],10:[2,21],18:[2,21],21:[2,21],24:[2,21],26:[2,21],27:[2,21],28:[2,21]},{8:[2,23],10:[2,23],18:[2,23],21:[2,23],24:[2,23],26:[2,23],27:[2,23],28:[2,23]},{5:[1,12],9:25,11:11,12:[1,16],13:[1,17],14:[1,18],15:[1,19],16:9,17:[1,14],19:8,20:[1,13],22:10,23:[1,15],25:7},{5:[1,12],9:26,11:11,12:[1,16],13:[1,17],14:[1,18],15:[1,19],16:9,17:[1,14],19:8,20:[1,13],22:10,23:[1,15],25:7},{5:[1,12],9:32,11:27,12:[1,16],13:[1,17],14:[1,18],15:[1,19],16:29,17:[1,14],19:28,20:[1,13],22:30,23:[1,15],25:31},{8:[2,4],10:[2,4],18:[2,4],21:[2,4],24:[2,4],26:[2,4],27:[2,4],28:[2,4]},{8:[2,5],10:[2,5],18:[2,5],21:[2,5],24:[2,5],26:[2,5],27:[2,5],28:[2,5]},{8:[2,6],10:[2,6],18:[2,6],21:[2,6],24:[2,6],26:[2,6],27:[2,6],28:[2,6]},{8:[2,7],10:[2,7],18:[2,7],21:[2,7],24:[2,7],26:[2,7],27:[2,7],28:[2,7]},{1:[2,1]},{5:[1,12],9:33,11:11,12:[1,16],13:[1,17],14:[1,18],15:[1,19],16:9,17:[1,14],19:8,20:[1,13],22:10,23:[1,15],25:7},{5:[1,12],9:34,11:11,12:[1,16],13:[1,17],14:[1,18],15:[1,19],16:9,17:[1,14],19:8,20:[1,13],22:10,23:[1,15],25:7},{5:[1,12],9:35,11:11,12:[1,16],13:[1,17],14:[1,18],15:[1,19],16:9,17:[1,14],19:8,20:[1,13],22:10,23:[1,15],25:7},{5:[1,12],9:36,11:11,12:[1,16],13:[1,17],14:[1,18],15:[1,19],16:9,17:[1,14],19:8,20:[1,13],22:10,23:[1,15],25:7},{21:[1,37],26:[1,24],27:[1,22],28:[1,23]},{18:[1,38],26:[1,24],27:[1,22],28:[1,23]},{24:[1,39],26:[2,21],27:[2,21],28:[2,21]},{24:[1,40],26:[2,18],27:[2,18],28:[2,18]},{24:[1,41],26:[2,19],27:[2,19],28:[2,19]},{24:[1,42],26:[2,20],27:[2,20],28:[2,20]},{24:[1,43],26:[2,17],27:[2,17],28:[2,17]},{26:[1,24],27:[1,22],28:[1,23]},{8:[2,3],10:[2,3],26:[1,24],27:[1,22],28:[1,23]},{8:[2,16],10:[2,16],18:[2,16],21:[2,16],24:[2,16],26:[1,24],27:[2,16],28:[1,23]},{8:[2,22],10:[2,22],18:[2,22],21:[2,22],24:[2,22],26:[1,24],27:[2,22],28:[2,22]},{8:[2,15],10:[2,15],18:[2,15],21:[2,15],24:[2,15],26:[2,15],27:[2,15],28:[2,15]},{8:[2,9],10:[2,9],18:[2,9],21:[2,9],24:[2,9],26:[2,9],27:[2,9],28:[2,9]},{8:[2,8],10:[2,8],18:[2,8],21:[2,8],24:[2,8],26:[2,8],27:[2,8],28:[2,8]},{8:[2,10],10:[2,10],18:[2,10],21:[2,10],24:[2,10],26:[2,10],27:[2,10],28:[2,10]},{8:[2,11],10:[2,11],18:[2,11],21:[2,11],24:[2,11],26:[2,11],27:[2,11],28:[2,11]},{8:[2,12],10:[2,12],18:[2,12],21:[2,12],24:[2,12],26:[2,12],27:[2,12],28:[2,12]},{8:[2,13],10:[2,13],18:[2,13],21:[2,13],24:[2,13],26:[2,13],27:[2,13],28:[2,13]},{8:[2,14],10:[2,14],18:[2,14],21:[2,14],24:[2,14],26:[2,14],27:[2,14],28:[2,14]}],
defaultActions: {20:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){

var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 12
break;
case 2:return 14
break;
case 3:return 13
break;
case 4:return 15
break;
case 5:return 5
break;
case 6:return 4
break;
case 7:return 27
break;
case 8:return 17
break;
case 9:return 18
break;
case 10:return 23
break;
case 11:return 24
break;
case 12:return 20
break;
case 13:return 21
break;
case 14:return 6
break;
case 15:return 10
break;
case 16:return 28
break;
case 17:return 26
break;
case 18:return 8
break;
case 19:return 'INVALID'
break;
}
};
lexer.rules = [/^\s+/,/^String\b/,/^Number\b/,/^Char\b/,/^Boolean\b/,/^([a-z]|[A-Z]|_|\.)+/,/^\/\/\+/,/^,/,/^\(/,/^\)/,/^\[/,/^\]/,/^\{/,/^\}/,/^::/,/^->/,/^:/,/^\|/,/^$/,/^./];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = typedjs_parser;
exports.parse = function () { return typedjs_parser.parse.apply(typedjs_parser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}