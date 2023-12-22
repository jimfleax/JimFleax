const $db = {
    'Home_Arithmetic_Addition': {
        'question': function() {
            var a = $.random(100, true, 0);
            var b = $.random(100, true, 0);
            this.answer = a + b;

            return `${a} + ${b}`;
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Arithmetic_Subtraction': {
        'question': function() {
            var a = $.random(100, true, 0);
            var b = $.random(100, true, 0);
            if (a >= b) {
                this.answer = a - b;
                return `${a} - ${b}`;
            } else {
                this.answer = b - a;
                return `${b} - ${a}`;
            }

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Arithmetic_Multiply': {
        'question': function() {
            var a = $.random(100, true, 0);
            var b = $.random(100, true, 0);
            this.answer = a * b;
            return a + ' × ' + b;

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Arithmetic_Divide': {
        'question': function() {
            x = $.random(100, true, 0);
            y = Math.min($.random(10, true, 0), $.random(x, true, 0));
            (Number.isInteger(x / y)) ? this.answer = (x / y) : (((x / y) === Infinity) ? this.answer = 'I' : this.answer = Number.parseInt(x / y) + ',' + (x % y));
            return x + ' ÷ ' + y;

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans.toString(), 'expression');
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans.toString(), 'expression');
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Arithmetic_Indices_Easy': {
        'question': function() {
            var a = $.random(10, true, 0);
            var b = $.random(3, true, 0, 1);
            this.answer = Math.pow(a, b);
            return a + expo(b);

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Arithmetic_Indices_Medium': {
        'question': function() {
            var a = $.random(10, true, 0);
            var b = $.random(6, true, 0, 1);
            this.answer = Math.pow(a, b);
            return a + expo(b);

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Arithmetic_Indices_Difficult': {
        'question': function() {
            var a = $.random(10, true, 0);
            var b = $.random(10, true, 0, 1);
            this.answer = Math.pow(a, b);
            return a + expo(b);

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Arithmetic_Squareroot': {
        'question': function() {
            var a = $.random(10, true, 0);
            this.answer = Math.sqrt(a).toFixed(2);
            return '√' + a;

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(2), ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(2), ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Algebra_Quadraticequations': {
        'isArray': true,
        'question': function() {
            var x = $.random(10, true, 0);
            var y = $.random(10, true, 0);
            var sign = $.random(1, true);
            fixSign = (num)=>{
                if (num > 0) {
                    return '+' + num;
                } else if (num === 0) {
                    this.question();
                } else {
                    return num;
                }
            }
            ;
            if (sign === 0) {
                y = -1 * y;
            }
            ;this.answer = [x, y];
            return '𝑥² ' + ((fixSign(-(x + y)) === undefined) || !(fixSign(-(x + y))) ? this.question() : fixSign(-(x + y))) + '𝑥 ' + ((fixSign((x * y)) === undefined) || !(fixSign((x * y))) ? this.question() : fixSign((x * y)));

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans, true);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans, true);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Arithmetic_Convert_Decimal': {
        'question': function() {
            var a = $.random(10, true, 0);
            var b = $.random(10, true, 0);
            this.answer = (a / b).toFixed(4);
            return [a, b];

        },
        'answer': null,
        'interface': function(name, address) {
            var quest = this.question();
            var $$ = [];
            $$[0] = new Text(quest[0],'');
            $$[1] = new Line(`height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;`);
            $$[2] = new Text(quest[1],'');
            $$[3] = new Break();
            $$[4] = new Input();
            $$[5] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(4), ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(4), ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Arithmetic_Convert_Percentage': {
        'question': function() {
            var a = $.random(10, true, 0);
            var b = $.random(10, true, 0);
            this.answer = ((a / b) * 100).toFixed(1);
            return [a, b];

        },
        'answer': null,
        'interface': function(name, address) {
            var quest = this.question();
            var $$ = [];
            $$[0] = new Text(quest[0],'');
            $$[1] = new Line(`height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;`);
            $$[2] = new Text(quest[1],'');
            $$[3] = new Break();
            $$[4] = new Input();
            $$[5] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(1), ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(1), ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Arithmetic_Factorsanddivisors': {
        'question': function() {
            num = $.random(1000, true, 0);
            divisorArr = [];
            var divisor;
            for (i = 0; i <= num; i++) {
                divisor = (num / i);
                (Number.isInteger(divisor)) ? divisorArr.push(divisor) : null;
            }
            ;var divisorLength = divisorArr.length;
            this.answer = [divisorLength, divisorArr];
            return ['How many divisors does ' + num + ' have?', 'List the divisors of ' + num];

        },
        'answer': null,
        'interface': function(name, address) {
            var quest = this.question();
            var ansr = this.answer;
            var $$ = [];
            $$[0] = new Text(quest[0],'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = ansr[0];
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            if (($.submit(name, address, parseFloat(document.querySelector('#response').value), ans, false, false)) === 'correct') {
                                document.querySelector('#appMain').innerHTML = '';
                                var $$$ = [];
                                $$$[0] = new Text(quest[1],'');
                                $$$[1] = new Break();
                                $$$[2] = new Input(undefined,'width: 20em');
                                $$$[3] = new Button();
                                ans = ansr[1];
                                $$$.forEach((j)=>{
                                    document.querySelector('#appMain').append(j);
                                    switch (j.localName) {
                                    case 'input':
                                        j.onkeypress = (o)=>{
                                            console.log(i);
                                            (o.which === 13) ? $.submit(name, address, document.querySelector('#response').value, ans, true) : null;
                                        }
                                        break;
                                    case 'button':
                                        j.onclick = ()=>{
                                            $.submit(name, address, document.querySelector('#response').value, ans, true);
                                        }
                                        break
                                    default:
                                        null;
                                        break;
                                    }
                                }
                                );

                            } else {
                                $.submit(name, address, document.querySelector('#response').value, ans);
                            }
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        if (($.submit(name, address, parseFloat(document.querySelector('#response').value), ans, false, false)) === 'correct') {
                            document.querySelector('#appMain').innerHTML = '';
                            var $$$ = [];
                            $$$[0] = new Text(quest[1],'');
                            $$$[1] = new Break();
                            $$$[2] = new Input(undefined,'width: 20em');
                            $$$[3] = new Button();
                            ans = ansr[1];
                            $$$.forEach((j)=>{
                                document.querySelector('#appMain').append(j);
                                switch (j.localName) {
                                case 'input':
                                    j.onkeypress = (o)=>{
                                        console.log(i);
                                        (o.which === 13) ? $.submit(name, address, document.querySelector('#response').value, ans, true) : null;
                                    }
                                    break;
                                case 'button':
                                    j.onclick = ()=>{
                                        $.submit(name, address, document.querySelector('#response').value, ans, true);
                                    }
                                    break
                                default:
                                    break;
                                }
                            }
                            );

                        } else {
                            $.submit(name, address, document.querySelector('#response').value, ans);
                        }
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Arithmetic_Numbersystem': {
        'question': function() {
            var a = $.random(100, true, 0);
            var b = $.random(10, true, 0, 1);
            var answer = [];
            numsys = function(num, base) {
                divide = num / base
                if (Number.isInteger(divide) == false) {
                    integerVal = parseInt(divide)
                    decim = divide - integerVal;
                    remainder = base * decim;
                    remainder = Math.round(remainder);
                    answer.push(remainder);
                    if (num > base) {
                        numsys(integerVal, base);
                    }
                } else if (Number.isInteger(divide) == true) {
                    integerVal = parseInt(divide);
                    decim = divide - integerVal;
                    remainder = base * decim;
                    remainder = Math.round(remainder);
                    answer.push(remainder);
                    if (num >= base) {
                        numsys(integerVal, base);
                    }
                }
            }
            numsys(a, b);
            answer = answer.reverse();
            this.answer = answer.join('');
            return [a, b];

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text(questionArr[0],'');
            $$[1] = new Text(questionArr[1],'font-size:32px; vertical-align:sub;');
            $$[2] = new Break();
            $$[3] = new Input();
            $$[4] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(2), ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(2), ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Permutationsandcombinations_Factorials': {
        'question': function() {
            var a = $.random(10, true, 0);
            result = [];
            for (i = a; i >= 1; i--) {
                result.push(i)
            }
            this.answer = result.reduce((a,b)=>a * b, 1);
            return a + '!';

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, parseFloat(document.querySelector('#response').value), ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, parseFloat(document.querySelector('#response').value), ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Permutationsandcombinations_Permutations': {
        'question': function() {
            var a = $.random(10, true, 0);
            var b = $.random(a, true, 0);

            factorial = (num)=>{
                result = [];
                for (i = num; i >= 1; i--) {
                    result.push(i)
                }
                ;return result.reduce((a,b)=>a * b, 1);
            }

            this.answer = (factorial(a) / factorial(b));
            return [a, b];

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text(questionArr[0],'font-size:32px; vertical-align:super;');
            $$[1] = new Text('P','');
            $$[2] = new Text(questionArr[1],'font-size:32px; vertical-align:sub;');
            $$[3] = new Break();
            $$[4] = new Input();
            $$[5] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, parseFloat(document.querySelector('#response').value), ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, parseFloat(document.querySelector('#response').value), ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Permutationsandcombinations_Combinations': {
        'question': function() {
            var a = $.random(10, true, 0);
            var b = $.random(a, true, 0);

            factorial = (num)=>{
                result = [];
                for (i = num; i >= 1; i--) {
                    result.push(i)
                }
                ;return result.reduce((a,b)=>a * b, 1);
            }

            this.answer = (factorial(a) / (factorial(b) * factorial(a - b)));
            return [a, b];

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text(questionArr[0],'font-size:32px; vertical-align:super;');
            $$[1] = new Text('C','');
            $$[2] = new Text(questionArr[1],'font-size:32px; vertical-align:sub;');
            $$[3] = new Break();
            $$[4] = new Input();
            $$[5] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, parseFloat(document.querySelector('#response').value), ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, parseFloat(document.querySelector('#response').value), ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Percentages_Type1': {
        'question': function() {
            var b = $.random(100, true, 0);
            var a = $.random(10000, true, 0);
            creaseType = ['increased', 'decreased'][$.random(1, true)];
            this.answer = (creaseType === 'increased') ? Number(((a + (a * (b / 100))).toFixed(2)).toString()) : Number(((a - (a * (b / 100))).toFixed(2)).toString());
            return 'What is ' + a + ' ' + creaseType + ' by ' + b + '%?';
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(2), ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(2), ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Percentages_Type2': {
        'question': function() {
            var b = $.random(1000, true, 0);
            var a = $.random(1000, true, 0);
            this.answer = (((b - a) / a) * 100).toFixed(0);
            return 'Find the percentage change ' + a + ' to ' + b;
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, parseFloat(document.querySelector('#response').value), ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, parseFloat(document.querySelector('#response').value), ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Series_Arithmeticprogression': {
        'question': function() {
            a = $.random(10, true);
            b = $.random(100, true);
            c = $.random(50, true, 0);
            d = $.random(10, true, 0);

            setofnum = [b, b + a, b + (a * 2), b + (a * 3), b + (a * 4), b + (a * 5)];

            difference = setofnum[1] - setofnum[0];
            firstTerm = setofnum[0];
            sum = ((firstTerm + b + (a * (c - 1))) / 2) * c;
            term = b + (a * (d - 1));
            this.answer = [term, sum];
            return [setofnum.join(', '), d, c];
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text(questionArr[0],'');
            $$[1] = new Break();
            $$[2] = new Text('T','font-weight: 900; font-size: 47px; font-style: italic; font-family: georgia;');
            $$[3] = new Text(questionArr[1],'font-size: 25px; font-weight: 400;');
            $$[4] = new Input();
            $$[5] = new Text('S','font-weight: 900; font-size: 47px; font-style: italic; font-family: georgia;');
            $$[6] = new Text(questionArr[2],'font-size: 25px; font-weight: 400;');
            $$[7] = new Input();
            $$[8] = new Break();
            $$[10] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, [parseFloat(document.querySelectorAll('#response')[0].value), parseFloat(document.querySelectorAll('#response')[1].value)].join(), ans.join());
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, [parseFloat(document.querySelectorAll('#response')[0].value), parseFloat(document.querySelectorAll('#response')[1].value)].join(), ans.join());
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Series_Geometricprogression': {
        'question': function() {

            a = $.random(10, true, true);
            b = $.random(100, true, true);
            c = $.random(50, true, true);
            d = $.random(10, true, true);
            a = $.random(100, true, 0);
            r = [$.random(6, true, 0), frac($.random(9, true, 0), $.random(9, true, 0))][$.random(1, true)];
            setofnum = [b, b * a, b + (a * 2), b + (a * 3), b + (a * 4), b + (a * 5)];
            setofnum = [a, a * r, a * Math.pow(r, 2), a * Math.pow(r, 3), a * Math.pow(r, 4), a * Math.pow(r, 5)];
            difference = setofnum[1] - setofnum[0];
            firstTerm = setofnum[0];
            sum = ((firstTerm + b + (a * (c - 1))) / 2) * c;
            term = b + (a * (d - 1));
            this.answer = [term, sum];
            return 'Coming soon';
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text(this.question(),'font-size:1.5em; font-family: internacional');
            /*
            $$[1] = new Break();
            $$[2] = new Text('T', 'font-weight: 900; font-size: 47px; font-style: italic; font-family: georgia;');
            $$[3] = new Text(questionArr[1], 'font-size: 25px; font-weight: 400;');
            $$[4] = new Input();
            $$[5] = new Text('S', 'font-weight: 900; font-size: 47px; font-style: italic; font-family: georgia;');
            $$[6] = new Text(questionArr[2], 'font-size: 25px; font-weight: 400;');
            $$[7] = new Input();            
            $$[8] = new Break();
            $$[10] = new Button();
            ans = this.answer;*/
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                /*
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, [parseFloat(document.querySelectorAll('#response')[0].value), parseFloat(document.querySelectorAll('#response')[1].value)].join(), ans.join());
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, [parseFloat(document.querySelectorAll('#response')[0].value), parseFloat(document.querySelectorAll('#response')[1].value)].join(), ans.join());
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }*/
            });

        }
    },
    'Home_Trigonometry_Trigonometricratios': {
        'question': function() {
            var TrigonometricRatios;
            TrigonometricRatios = {
                'sum': ['sin', 'cos', 'tan', 'cosec', 'sec', 'cot'],
                'deg': [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360],
                'sin': ['0', '1/2', '1/*2', '*3/2', '1'],
                'cos': ['1', '*3/2', '1/*2', '1/2', '0'],
                'tan': ['0', '1/*3', '1', '*3', 'I'],
                'cosec': ['U', '2', '*2', '2/*3', '1'],
                'sec': ['1', '2/*3', '*2', '2', 'U'],
                'cot': ['U', '*3', '1', '1/*3', '0']
            };
            var funcValue = TrigonometricRatios.sum[$.random(5, true)];
            var degree = TrigonometricRatios.deg[$.random(15, true)];
            function trig(func, theta) {
                if (theta >= 0 && theta < 90) {
                    deg = theta;
                    quadrant = 1;
                } else if (theta >= 90 && theta < 180) {
                    deg = 180 - theta;
                    quadrant = 2;
                } else if (theta >= 180 && theta < 270) {
                    deg = theta - 180;
                    quadrant = 3;
                } else if (theta >= 270 && theta <= 360) {
                    deg = 360 - theta;
                    quadrant = 4;
                }
                function trigEval(func, angle, quadrant) {
                    if (func == 'sin') {
                        if (quadrant == 1 || quadrant == 2) {
                            if (angle == 0) {
                                return '0'
                            } else if (angle == 30) {
                                return '1/2'
                            } else if (angle == 45) {
                                return '1/*2'
                            } else if (angle == 60) {
                                return '*3/2'
                            } else if (angle == 90) {
                                return '1'
                            }
                        } else if (quadrant == 3 || quadrant == 4) {
                            if (angle == 0) {
                                return '0'
                            } else if (angle == 30) {
                                return '-1/2'
                            } else if (angle == 45) {
                                return '-1/*2'
                            } else if (angle == 60) {
                                return '-*3/2'
                            } else if (angle == 90) {
                                return '-1'
                            }
                        }
                    } else if (func == 'cos') {
                        if (quadrant == 1 || quadrant == 4) {
                            if (angle == 0) {
                                return '1'
                            } else if (angle == 30) {
                                return '*3/2'
                            } else if (angle == 45) {
                                return '1/*2'
                            } else if (angle == 60) {
                                return '1/2'
                            } else if (angle == 90) {
                                return '0'
                            }
                        } else if (quadrant == 2 || quadrant == 3) {
                            if (angle == 0) {
                                return '-1'
                            } else if (angle == 30) {
                                return '-*3/2'
                            } else if (angle == 45) {
                                return '-1/*2'
                            } else if (angle == 60) {
                                return '-1/2'
                            } else if (angle == 90) {
                                return '0'
                            }
                        }
                    } else if (func == 'tan') {
                        if (quadrant == 1 || quadrant == 3) {
                            if (angle == 0) {
                                return '0'
                            } else if (angle == 30) {
                                return '1/*3'
                            } else if (angle == 45) {
                                return '1'
                            } else if (angle == 60) {
                                return '*3'
                            } else if (angle == 90) {
                                return 'I'
                            }
                        } else if (quadrant == 2 || quadrant == 4) {
                            if (angle == 0) {
                                return '0'
                            } else if (angle == 30) {
                                return '-1/*3'
                            } else if (angle == 45) {
                                return '-1'
                            } else if (angle == 60) {
                                return '-*3'
                            } else if (angle == 90) {
                                return 'I'
                            }
                        }
                    } else if (func == 'cosec') {
                        if (quadrant == 1 || quadrant == 2) {
                            if (angle == 0) {
                                return 'U'
                            } else if (angle == 30) {
                                return '2'
                            } else if (angle == 45) {
                                return '*2'
                            } else if (angle == 60) {
                                return '2/*3'
                            } else if (angle == 90) {
                                return '1'
                            }
                        } else if (quadrant == 3 || quadrant == 4) {
                            if (angle == 0) {
                                return 'U'
                            } else if (angle == 30) {
                                return '-2'
                            } else if (angle == 45) {
                                return '-*2'
                            } else if (angle == 60) {
                                return '-2/*3'
                            } else if (angle == 90) {
                                return '-1'
                            }
                        }
                    } else if (func == 'sec') {
                        if (quadrant == 1 || quadrant == 4) {
                            if (angle == 0) {
                                return '1'
                            } else if (angle == 30) {
                                return '2/*3'
                            } else if (angle == 45) {
                                return '*2'
                            } else if (angle == 60) {
                                return '2'
                            } else if (angle == 90) {
                                return 'U'
                            }
                        } else if (quadrant == 2 || quadrant == 3) {
                            if (angle == 0) {
                                return '-1'
                            } else if (angle == 30) {
                                return '-2/*3'
                            } else if (angle == 45) {
                                return '-*2'
                            } else if (angle == 60) {
                                return '-2'
                            } else if (angle == 90) {
                                return 'U'
                            }
                        }
                    } else if (func == 'cot') {
                        if (quadrant == 1 || quadrant == 3) {
                            if (angle == 0) {
                                return 'U'
                            } else if (angle == 30) {
                                return '*3'
                            } else if (angle == 45) {
                                return '1'
                            } else if (angle == 60) {
                                return '1/*3'
                            } else if (angle == 90) {
                                return '0'
                            }
                        } else if (quadrant == 2 || quadrant == 4) {
                            if (angle == 0) {
                                return 'U'
                            } else if (angle == 30) {
                                return '-*3'
                            } else if (angle == 45) {
                                return '-1'
                            } else if (angle == 60) {
                                return '-1/*3'
                            } else if (angle == 90) {
                                return '0'
                            }
                        }
                    }
                }
                return trigEval(func, deg, quadrant);
            }
            ;this.answer = trig(funcValue, degree);
            return funcValue + '(' + degree + '°)';
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, (document.querySelector('#response').value), ans, 'expression');
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, (document.querySelector('#response').value), ans, 'expression');
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Trigonometry_Trigonometricapproximations': {
        'question': function() {

            degree = $.random(360, true);
            trigFunc = ['sin', 'cos', 'tan'][$.random(2, true)];
            operation = "Math." + trigFunc + "(degree*(Math.PI/180))";
            if (eval(operation) > 1 || eval(operation) < -1) {
                console.log('Outside range');
                this.question();
            }
            ;
            if (-1 <= eval(operation) && eval(operation) < -0.5) {
                this.answer = "-1 ≤ 𝑥 < -0.5";
            } else if (-0.5 <= eval(operation) && eval(operation) < 0) {
                this.answer = "-0.5 ≤ 𝑥 < 0";
            } else if (0 <= eval(operation) && eval(operation) < 0.5) {
                this.answer = "0 ≤ 𝑥 < 0.5";
            } else if (0.5 <= eval(operation) && eval(operation) < 1) {
                this.answer = "0.5 ≤ 𝑥 < 1";
            } else {
                console.log("Error: degree eval error. <" + trigFunc + "(" + degree + "°) = " + eval(operation) + ">");
            }
            ;return trigFunc + '(' + degree + '°)';
            // Error: some values of tan is outside range so adjust for that.
            /*
            *   add a new obj for <select> elements, required in this app. And configure.
            */

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Select('width:6em;text-align:center;','-1 ≤ 𝑥 < -0.5','-0.5 ≤ 𝑥 < 0','0 ≤ 𝑥 < 0.5','0.5 ≤ 𝑥 < 1');
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Algebra_Cubicexpressions_Cubicexpansion': {
        'question': function() {
            var α = '𝑥';

            var a = $.random(10, true, 0)
              , b = $.random(10, true, 0)
              , c = $.random(10, true, 0)
              , x = $.random(10, true, 0)
              , y = $.random(10, true, 0)
              , z = $.random(10, true, 0);
            this.answer = [(a * b * c), ((a * b * z) + (a * c * y) + (b * c * x)), ((a * y * z) + (b * x * z) + (c * x * y)), (x * y * z)];
            return '(' + a + α + '+' + x + ')(' + b + α + '+' + y + ')(' + c + α + '+' + z + ')';
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input(undefined,'width:7em;');
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans, true);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans, true);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Algebra_Cubicexpressions_Cubicfactorisation': {
        'question': function() {
            var x = '𝑥';
            var a1 = $.random(3, true, 0)
              , a2 = 1
              , a3 = 1
              , b1 = $.random(10, true, 0)
              , b2 = $.random(10, true, 0)
              , b3 = $.random(10, true, 0)
              , t1 = '(' + a1 + x + '+' + b1 + ')'
              , t2 = '(' + a2 + x + '+' + b2 + ')'
              , t3 = '(' + a3 + x + '+' + b3 + ')';
            this.answer = [t1, t2, t3];
            return ((a1 * a2 * a3) === 1 ? '' : (a1 * a2 * a3)) + '𝑥³ + ' + (((a1 * a2 * b3) + (a1 * a3 * b2) + (a2 * a3 * b1)) === 1 ? '' : ((a1 * a2 * b3) + (a1 * a3 * b2) + (a2 * a3 * b1))) + '𝑥² + ' + (((a1 * b2 * b3) + (a2 * b1 * b3) + (a3 * b1 * b2)) === 1 ? '' : ((a1 * b2 * b3) + (a2 * b1 * b3) + (a3 * b1 * b2))) + '𝑥 + ' + ((b1 * b2 * b3) === 1 ? '' : (b1 * b2 * b3));
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input(undefined, 'width:7em;');
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans, true);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans, true);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Simultaneousequations_Level1': {
        'question': function() {
            var x = $.random(10, true, 0)
              , y = $.random(10, true, 0)
              , b = $.random(10, true, 0)
              , a = $.random(10, true, 0)
              , c = $.random(10, true, 0)
              , d = $.random(10, true, 0);
            o = a * x + b * y;
            n = c * x - d * y;
            this.answer = [x, y];
            return [(a + 'x + ' + b + 'y = ' + o), (c + 'x - ' + d + 'y = ' + n)];

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text(questionArr[0],'');
            $$[1] = new Break();
            $$[2] = new Text(questionArr[1],'')
            $$[3] = new Break();
            $$[4] = new Input(undefined,'margin:10px;','x');
            $$[5] = new Input(undefined,'margin:10px;','y');
            $$[6] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, [document.querySelectorAll('#response')[0].value, document.querySelectorAll('#response')[1].value].join(), ans.join());
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, [document.querySelectorAll('#response')[0].value, document.querySelectorAll('#response')[1].value].join(), ans.join());
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Simultaneousequations_Level2': {
        'question': function() {
            var x = $.random(10, true, 0)
              , y = $.random(10, true, 0)
              , z = $.random(10, true, 0)
              , w = $.random(10, true, 0)
              , a = $.random(10, true, 0)
              , b = $.random(10, true, 0)
              , c = $.random(10, true, 0)
              , d = $.random(10, true, 0)
              , e = $.random(10, true, 0)
              , f = $.random(10, true, 0)
              , g = $.random(10, true, 0)
              , h = $.random(10, true, 0);
            o = a * w + b * x
            n = c * x - d * y
            p = e * w + f * y
            r = g * x - h * z
            this.answer = [w, x, y, z];
            return [(a + 'a + ' + b + 'b = ' + o), (c + 'b - ' + d + 'c = ' + n), (e + 'a + ' + f + 'c = ' + p), (g + 'b - ' + h + 'd = ' + r)];

        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text(questionArr[0],'');
            $$[1] = new Break();
            $$[2] = new Text(questionArr[1],'')
            $$[3] = new Break();
            $$[4] = new Text(questionArr[2],'')
            $$[5] = new Break();
            $$[6] = new Text(questionArr[3],'')
            $$[7] = new Break();
            $$[8] = new Input(undefined,'margin:10px;','a');
            $$[9] = new Input(undefined,'margin:10px;','b');
            $$[10] = new Input(undefined,'margin:10px;','c');
            $$[11] = new Input(undefined,'margin:10px;','d');
            $$[12] = new Break();
            $$[13] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, [document.querySelectorAll('#response')[0].value, document.querySelectorAll('#response')[1].value, document.querySelectorAll('#response')[2].value, document.querySelectorAll('#response')[3].value].join(), ans.join());
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, [document.querySelectorAll('#response')[0].value, document.querySelectorAll('#response')[1].value, document.querySelectorAll('#response')[2].value, document.querySelectorAll('#response')[3].value].join(), ans.join());
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Simultaneousequations_Linearequations': {
        'question': function() {
            var a = isPrime($.random(10, true), 10, true);
            var b = isPrime($.random(10, true), 10, true);
            var c = isPrime($.random(10, true), 10, true);
            var d = isPrime($.random(10, true), 10, true);
            var fixSign = (num)=>{
                if (num > 0) {
                    return '+' + num;
                } else if (num === 0) {
                    this.question();
                } else {
                    return num;
                }
            }

            //var slope = (b - d) / (a - c);
            this.answer = (formatCoef((frac(undefined, undefined, (parseFloat((b - d) / (a - c)).toFixed(5)))))) ? (formatCoef((frac(undefined, undefined, (parseFloat((b - d) / (a - c)).toFixed(5))))) === ' ' ? (formatCoef((frac(undefined, undefined, (parseFloat((b - d) / (a - c)).toFixed(5))))) === '-' ? '-' : '') + 'x' : (formatCoef((frac(undefined, undefined, (parseFloat((b - d) / (a - c)).toFixed(5))))) + 'x')) + (((parseFloat(fixSign(b - (a * (b - d) / (a - c)))).toFixed(5) * 100000) < 0) ? (frac(undefined, undefined, (parseFloat(fixSign(b - (a * (b - d) / (a - c)))).toFixed(5) * 100000) / 100000)) : ((frac(undefined, undefined, (parseFloat(fixSign(b - (a * (b - d) / (a - c)))).toFixed(5) * 100000) / 100000)) ? ('+' + (frac(undefined, undefined, (parseFloat(fixSign(b - (a * (b - d) / (a - c)))).toFixed(5) * 100000) / 100000))) : '')) : (frac(undefined, undefined, (parseFloat(fixSign(b - (a * (b - d) / (a - c)))).toFixed(5) * 100000) / 100000));
            !(this.answer) ? (this.question(), console.log('Answer undefined')): null;
            ((this.answer.length >= 7) ? (this.question(), console.log('Long answer')) : null);
            //this.answer = (((frac(undefined,undefined,((parseFloat((b-d)/(a-c)).toFixed(5))*100000)/100000))===1) ? '' : (frac(undefined,undefined,((parseFloat((b-d)/(a-c)).toFixed(5))*100000)/100000))) + 'x' + (((parseFloat(fixSign(b-(a*(b-d)/(a-c)))).toFixed(5)*100000)<0) ? (frac(undefined,undefined,(parseFloat(fixSign(b-(a*(b-d)/(a-c)))).toFixed(5)*100000)/100000)) : ('+' + (frac(undefined,undefined,(parseFloat(fixSign(b-(a*(b-d)/(a-c)))).toFixed(5)*100000)/100000))));
            return 'A(' + a + ',' + b + ')\tB(' + c + ',' + d + ')';
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Text('Find the equation of line AB.','font-size:35px;');
            $$[3] = new Break();
            $$[4] = new Text('y = ','color:#4f4f4f;font-size:32px;');
            $$[5] = new Input(undefined,'width:7em;margin-left:6px;');
            $$[6] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Fractions_Addition': {
        'question': function() {
            w = isPrime($.random(20, true, 0), 20, true, 0);
            x = isPrime($.random(20, true, 0, 1), 20, true, 0, 1);
            y = isPrime($.random(10, true, 0), 10, true, 0);
            z = isPrime($.random(10, true, 0, 1), 10, true, 0, 1);
            denominator = y * z;
            firstNumerator = x * z;
            secondNumerator = w * y;
            numerator = firstNumerator + secondNumerator;
            this.answer = frac(numerator, denominator);
            return [x, y, w, z];
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text();
            $$[0].innerHTML = `<div style="display:flex;margin: auto;width: fit-content;"><span style="font-family: KaTeX_Main;"><div>${questionArr[0]}<hr style="height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;">${questionArr[1]}</div></span><span style="font-family: KaTeX_Main;display: block;height: fit-content;margin: auto;margin-inline: 30px;">+</span><span style="font-family: KaTeX_Main;"><div>${questionArr[2]}<hr style="height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;">${questionArr[3]}</div></span></div>`
            //$$[0].innerHTML = '<div>' + questionArr[0] + '<hr style="height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;">' + questionArr[1] + '</div>';
            //$$[1] = new Line(`height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;`);
            //$$[2] = new Text(questionArr[1],'');
            //$$[1] = new Text('+','');
            //$$[2] = new Text();
            //$$[2].innerHTML = '<div>' + questionArr[2] + '<hr style="height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;">' + questionArr[3] + '</div>';
            //$$[4] = new Text(questionArr[2],'');
            //$$[5] = new Line(`height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;`);
            //$$[6] = new Text(questionArr[3],'');
            $$[1] = new Break();
            $$[2] = new Input(undefined,'width:7em;margin-left:6px;');
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                console.log(e);
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Fractions_Multiplication': {
        'question': function() {
            x = isPrime($.random(50, true, 0, 1), 100, true, 0, 1);
            y = isPrime($.random(20, true, 0), 10, true, 0);
            z = isPrime($.random(100, true, 0, 1), 10, true, 0, 1);

            this.answer = frac((x * z), y);
            return [x, y, z];
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text();
            $$[0].innerHTML = `<div style="display:flex;margin: auto;width: fit-content;"><span style="font-family: KaTeX_Main;"><div>${questionArr[0]}<hr style="height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;">${questionArr[1]}</div></span><span style="font-family: KaTeX_Main;display: block;height: fit-content;margin: auto;margin-inline: 30px;">×</span><span style="display:block;height:fit-content;margin:auto;">${questionArr[2]}</span></div>`;
            //$$[0].innerHTML = '<div>' + questionArr[0] + '<hr style="height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;">' + questionArr[1] + '</div>';
            //$$[1] = new Line(`height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;`);
            //$$[2] = new Text(questionArr[1],'');
            //$$[1] = new Text('+','');
            //$$[2] = new Text();
            //$$[2].innerHTML = '<div>' + questionArr[2] + '<hr style="height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;">' + questionArr[3] + '</div>';
            //$$[4] = new Text(questionArr[2],'');
            //$$[5] = new Line(`height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;`);
            //$$[6] = new Text(questionArr[3],'');
            $$[1] = new Break();
            $$[2] = new Input(undefined,'width:7em;margin-left:6px;');
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Fractions_Subtraction': {
        'question': function() {
            w = isPrime($.random(20, true, 0), 20, true, 0);
            x = isPrime($.random(20, true, 0, 1), 20, true, 0, 1);
            y = isPrime($.random(10, true, 0), 10, true, 0);
            z = isPrime($.random(10, true, 0, 1), 10, true, 0, 1);
            denominator = y * z;
            firstNumerator = x * z;
            secondNumerator = w * y;
            numerator = firstNumerator - secondNumerator;
            this.answer = frac(numerator, denominator);
            return [x, y, w, z];
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text();
            $$[0].innerHTML = `<div style="display:flex;margin: auto;width: fit-content;"><span style="font-family: KaTeX_Main;"><div>${questionArr[0]}<hr style="height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;">${questionArr[1]}</div></span><span style="font-family: KaTeX_Main;display: block;height: fit-content;margin: auto;margin-inline: 30px;">-</span><span style="font-family: KaTeX_Main;"><div>${questionArr[2]}<hr style="height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;">${questionArr[3]}</div></span></div>`
            //$$[0].innerHTML = '<div>' + questionArr[0] + '<hr style="height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;">' + questionArr[1] + '</div>';
            //$$[1] = new Line(`height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;`);
            //$$[2] = new Text(questionArr[1],'');
            //$$[1] = new Text('+','');
            //$$[2] = new Text();
            //$$[2].innerHTML = '<div>' + questionArr[2] + '<hr style="height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;">' + questionArr[3] + '</div>';
            //$$[4] = new Text(questionArr[2],'');
            //$$[5] = new Line(`height: 4px;width: 1.3em;background: #596299;border: none;border-radius: 5em;margin: auto;`);
            //$$[6] = new Text(questionArr[3],'');
            $$[1] = new Break();
            $$[2] = new Input(undefined,'width:7em;margin-left:6px;');
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Circletheorem_Degreestoradians': {
        'question': function() {
            deg = isPrime($.random(360, true, 0), 360, true, 0);
            this.answer = frac(deg, 180);
            return '(' + deg + '°)';
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input(undefined,'margin-right:6px;');
            $$[3] = new Text('π\t\t\t\t\t','');
            $$[4] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Circletheorem_Radianstodegrees': {
        'question': function() {
            deg = isPrime($.random(360, true, 0), 360, true, 0);
            this.answer = deg
            return frac(deg, 180).split('/');
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            var questionArr = this.question();
            $$[0] = new Text(questionArr[0] + 'π','');
            $$[1] = new Line(`height: 4px;width: ${(Math.max(questionArr[0].length, questionArr[1].length) * (311 / 11)) + 20}px;background: #596299;border: none;border-radius: 5em;margin: auto;`);
            $$[2] = new Text(questionArr[1],'');
            $$[3] = new Break();
            $$[4] = new Input(undefined,'margin-right:6px;');
            $$[5] = new Text('°\t\t\t\t\t','');
            $$[6] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Circletheorem_Sectors': {
        'question': function() {
            w = $.random(10, true, 0);
            x = $.random(10, true, 0);
            y = $.random(10, true, 0);
            z = $.random(1, true, 0);

            angle = Number(($.random(360, true) * (Math.PI / 180)).toFixed(1));
            radius = $.random(20, true, 0);
            arc = Number((radius * angle).toFixed(1))
            r = $.random(3, true);
            if (r == 0) {
                this.answer = arc
                return 'What is the arc length of a sector with angle ' + angle + ' radians and radius ' + radius + 'cm?';
            } else if (r == 1) {
                this.answer = radius;
                return 'What is the radius of a circle with sector angle ' + angle + ' radians and arc length ' + arc + 'cm?';
            } else if (r == 2) {
                this.answer = angle;
                return 'What is the angle of a sector with radius ' + radius + 'cm and arc length ' + arc + 'cm?';
            } else if (r == 3) {
                this.answer = (Math.pow(radius, 2) * angle) / 2;
                return 'What is the area of a sector with angle ' + angle + ' radians and radius ' + radius + 'cm?';
            }
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[4] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, document.querySelector('#response').value, ans, 'expression');
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Statistics_Binomialdistribution': {
        'question': function() {
            x = $.random(10, true, 0);
            y = $.random(100, true, 0);
            z = $.random(x, true, 0);
            factorial = (num)=>{
                result = [];
                for (i = num; i >= 1; i--) {
                    result.push(i)
                }
                ;return result.reduce((a,b)=>a * b, 1);
            };
            this.answer = parseFloat(((factorial(x) / (factorial(z) * factorial(x - z))) * (Math.pow((y / 100), z)) * (Math.pow((1 - (y / 100)), (x - z)))).toFixed(2));
            return "A biased coin has " + y + "% chance of showing heads in each toss. Find the probability that " + x + " tosses will result in exactly " + z + " heads.";
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'');
            $$[1] = new Break();
            $$[2] = new Input();
            $$[3] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(2), ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, parseFloat(document.querySelector('#response').value).toFixed(2), ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
    'Home_Statistics_Geometricdistribution': {
        'question': function() {
            x = $.random(10, true, 0);
            y = $.random(100, true, 0);
            z = $.random(x, true, 0);
            factorial = (num)=>{
                result = [];
                for (i = num; i >= 1; i--) {
                    result.push(i)
                }
                ;return result.reduce((a,b)=>a * b, 1);
            }
            this.answer = parseFloat((factorial(x) / (factorial(z) * factorial(x - z))) * (Math.pow((y / 100), z)) * (Math.pow((1 - (y / 100)), (x - z))).toFixed(2));
            //return "A biased coin has " + y + "% chance of showing heads in each toss. Find the probability that " + x + " tosses will result in exactly " + z + " heads.";
            return 'Coming soon';
        },
        'answer': null,
        'interface': function(name, address) {
            var $$ = [];
            $$[0] = new Text(this.question(),'font-size:1.5em;font-family:internacional;');
            //$$[1] = new Break();
            //$$[2] = new Input();
            //$$[4] = new Button();
            ans = this.answer;
            $$.forEach(function(e) {
                document.querySelector('#appMain').append(e);
                switch (e.localName) {
                case 'input':
                    e.onkeypress = function(i) {
                        console.log(i);
                        if (i.which == 13) {
                            $.submit(name, address, parseFloat(document.querySelector('#response').value), ans);
                        }
                    }
                    ;
                    break;
                case 'button':
                    e.onclick = function() {
                        $.submit(name, address, parseFloat(document.querySelector('#response').value), ans);
                    }
                    ;
                    break;
                default:
                    null;
                    break;

                }
            });

        }
    },
}

// create an object for polynomials. that will solve the issue of algebraic manipulation.
//create a function to simplify expressions. such as returning 1x as x, etc.
//linear equations error: 0x+4,0x+1...must be solved!!!
