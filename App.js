// CosmicMath (c) Reetabrata Bhandari

var ls = localStorage;
var currentscore;
var CosmicMath = $;
var $_ = false;
function $dup(arr, include) {
    if (arr.includes(include) == false) {
        arr.push(include);
    } else {
        null;
    }
}

CosmicMath = {
    'BootApp': function() {},
    'auth': {
        'loadPage': function() {
            document.body.innerHTML = '<style>body {test-align: center; background: #fff !important; user-select: none; font-family: calibri;} </style> <span id="mainBoard"><span style="font-size: 36px;text-shadow: none;font-family: &apos;InternacionalB&apos;,&apos;Helvetica&apos;,&apos;Arial&apos;!important;color: #0000009e;display: block;width: fit-content;height: fit-content;margin-top: calc(100% - 10em);">Hi, what do we call you<b style=" color: #5c6bc0; font-size: 7vh; ">?</b></span></span><div id="loginPanel"><input autocorrect="off" required> <br><br>  <button id="submitLogin" type="submit" onclick="$.auth.processData(document.querySelector(&quot;#loginPanel > input&quot;).value)"><span style=" display: block; width: fit-content; height: fit-content; margin: auto; ">Next </span><span class="arrow" style="display: block;width: fit-content;height: fit-content;margin: auto;"><img alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgOCA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOCAwLjM2ODU5Mkw0Ljg2NzUxIDMuNjMxNDFDNC4zOTU2OSA0LjEyMjg2IDMuNjMwNzEgNC4xMjI4NiAzLjE1ODg5IDMuNjMxNDFMNi4yOTEzNyAwLjM2ODU5MUM2Ljc2MzIgLTAuMTIyODY0IDcuNTI4MTggLTAuMTIyODYzIDggMC4zNjg1OTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNLTEuNjExMTdlLTA4IDAuMzY4NTkyTDMuMTMyNDggMy42MzE0MUMzLjYwNDMxIDQuMTIyODYgNC4zNjkyOSA0LjEyMjg2IDQuODQxMTEgMy42MzE0MUwxLjcwODYzIDAuMzY4NTkxQzEuMjM2OCAtMC4xMjI4NjUgMC40NzE4MjQgLTAuMTIyODY0IC0xLjYxMTE3ZS0wOCAwLjM2ODU5MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" style=" width: 15px; height: 9px; margin: auto; transform: rotate(-90deg); "></span></button> </div>';
            var appName;
            document.title = 'CosmicMath';
            document.oncontextmenu = function() {
                return false;
            }
            elmt = document.createElement('meta');
            elmt.name = 'description';
            elmt.content = 'CosmicMath, a math practicing platform created by Reetabrata Bhandari.';
            elmt101 = document.head.append(elmt);
            a = document.querySelector('body');
            el = document.createElement('div');
            el.innerHTML = '<div title="CosmicMath" id="app"><span style=" margin: auto; ">CosmicMath</span><svg onclick="CosmicMath.launchApp()" class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style=" width: 35px; fill: #ffffffdb; margin: auto; margin-left: 12px; "><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path></svg></div>';
            a.append(el);
        },
        'processData': function(username) {
            if (username != '') {
                ls.setItem('name', username);
                $.auth.username = username;
                if ($.auth.check() == 'usr_verified_true') {
                    $.launchApp();
                }
            } else {
                $.msg('Please enter your name');
            }

        },
        'check': function() {
            if (ls.getItem('name') == undefined) {
                CosmicMath.auth.loadPage();
            } else
                return 'usr_verified_true'
        },
        'logout': function() {
            ls.clear();
            $.auth.check();
        }
    },
    'courses': {
        'Topics': ['Topics.Arithmetic.Addition', 'Topics.Arithmetic.Subtraction', 'Topics.Arithmetic.Multiply', 'Topics.Arithmetic.Divide', 'Topics.Arithmetic.Indices.Easy', 'Topics.Arithmetic.Indices.Medium', 'Topics.Arithmetic.Indices.Difficult', 'Topics.Arithmetic.Square root', 'Topics.Arithmetic.Convert.Decimal', 'Topics.Arithmetic.Convert.Percentage', 'Topics.Arithmetic.Factors and divisors', 'Topics.Arithmetic.Number system', 'Topics.Permutations and combinations.Factorials', 'Topics.Permutations and combinations.Permutations', 'Topics.Permutations and combinations.Combinations', 'Topics.Percentages.Type 1', 'Topics.Percentages.Type 2', 'Topics.Series.Arithmetic progression', 'Topics.Series.Geometric progression', 'Topics.Trigonometry.Trigonometric ratios', 'Topics.Trigonometry.Trigonometric approximations', 'Topics.Algebra.Cubic expressions.Cubic expansion', 'Topics.Algebra.Cubic expressions.Cubic factorisation', 'Topics.Algebra.Quadratic equations', 'Topics.Simultaneous equations.Level 1', 'Topics.Simultaneous equations.Level 2', 'Topics.Simultaneous equations.Linear equations', 'Topics.Fractions.Multiplication', 'Topics.Fractions.Addition', 'Topics.Fractions.Subtraction', 'Topics.Circle theorem.Degrees to radians', 'Topics.Circle theorem.Radians to degrees', 'Topics.Circle theorem.Sectors', 'Topics.Statistics.Binomial distribution', 'Topics.Statistics.Geometric distribution']

    },
    'beta': {
        'render': function(isHome, active, pos) {
            function getTopic(updateLocalStorage=false) {
                if (updateLocalStorage === true) {
                    var $topic = [];
                    $.courses.Topics.forEach(function(e) {
                        $dup($topic, e);
                    });
                    ls.setItem('__topic', '');
                    $topic.forEach(function(name) {
                        $topic[$topic.indexOf(name)] = name.split('.');
                        ls.__topic = ls.__topic.concat(name + ',');
                    });
                    return ls.__topic.split(',');
                } else {
                    return ls.__topic.split(',');
                }

            }
            ;function getActiveTopic(lastTopic, pos) {

                $topic = getTopic(true);
                $activeHolder = [];
                $topic.forEach(function(a) {
                    a = a.split('.');
                    $dup($activeHolder, [a[pos - 1], a[pos]]);
                });
                $active = [];
                $activeHolder.forEach(function(e) {
                    if (e[0] === lastTopic) {
                        $dup($active, e[1]);
                    } else
                        null;
                })
                return $active;
            }
            ;if (isHome === true) {
                ls.setItem('location', 1);
                ls.setItem('cm_address', 'Home');
                document.querySelector('#mainBoard').innerHTML = '';
                $$$$ = document.createElement('span');
                $$$$.id = 't100';
                $$$$.innerHTML = 'Topics';
                document.querySelector('#mainBoard').append($$$$);
                document.querySelector("#app > svg").innerHTML = `<path fill-rule="evenodd" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>`;
                document.querySelector("#app > svg").onclick = ()=>{
                    $.infoPanel(1, 'CosmicMath', 'Introducing the ultimate CosmicMath app, housing '+ $.courses.Topics.length + '+ different types of sums, which will help you build lightning-fast calculation speed and internalize mathematical concepts. <br><br>CosmicMath algorithmically-generates unlimited sums for you to practice regularly and familiarize yourself with numbers and master mathematics. It improves your meta-skills such as calculation speed and helps you to build mathematical intuition.<br><br>The CosmicMath interface has been designed with utmost care for you, priortizing immersive experience and responsiveness. You will find it easier to focus with this minimal and responsive user-interface.<br><br>Meet the Fluent Mode which enables you to solve sums fluently without spending much time for submitting. It automatically submits if you have entered the correct answer and lets you proceed to the next sum instantly.<br><br>Since the app is yet to reach a stable functional stage, often (hopefully rarely) the sum generates a wrong answer due to bugs in the algorithm - to fix this and ensure the app is generating correct answer I have created a shortcut to see the answer (to be used rarely when you have a doubt regarding the answer). To use this, type <code>jim.ans</code> in any of the input blanks and submit.<br><br>I would appreciate any feedback regarding the UI or queries regarding errors. This app is still under development.<br><br> - Reetabrata Bhandari');
                }
                store = getActiveTopic('Topics', 1);
                store.forEach(function(a, b) {
                    $$$ = document.createElement('div');
                    $$$.id = 'course';
                    $$$.innerHTML = '<button tabindex="' + b + '">' + a + '</button>';

                    document.querySelector('#mainBoard').append($$$);
                    $$$.onclick = function() {
                        ls.setItem('__currActive', 'Topics');
                        $.beta.render(false, a, 2);
                        ls.location++;

                    }
                    ;
                    delete $$$;
                    delete $$$$;
                })

            } else {
                store = getActiveTopic(active, pos);
                document.querySelector("#app > svg").innerHTML = `<path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path>`;
                document.querySelector("#app > svg").onclick = ()=>{
                    CosmicMath.launchApp();
                }
                if (ls.cm_address.split('_').length <= 1 && ls.cm_address.split('_').includes('Home') === false) {
                    ls.cm_address = 'Home';
                } else if (ls.cm_address.split('_').includes('Home') === true) {
                    ls.cm_address = ls.cm_address.concat(`_${active}`);
                } else {
                    console.log('errrr');
                }

                ;d = getTopic();
                f = [];
                d.forEach(function(e) {
                    $dup(f, e.split('.'));
                });
                atc = f.filter(function(i) {
                    return i.includes(active)
                })[0];

                if (store[0] === undefined && store.length === 1) {
                    $.createSum(active, ls.cm_address);
                } else {
                    document.querySelector('#mainBoard').innerHTML = '';
                    $$$$ = document.createElement('span');
                    $$$$.id = 't100';
                    $$$$.innerHTML = active;
                    document.querySelector('#mainBoard').append($$$$);
                    $$$$.onclick = function() {
                        if (ls.location <= 1) {
                            console.log("At homepage...");
                            ls.cm_address = 'Home';
                        } else {
                            try {
                                cm_address = ls.cm_address.split('_');
                                if (cm_address.length <= 1 && cm_address.includes('Home') === false) {
                                    ls.cm_address = 'Home';
                                } else if (cm_address.includes('Home') === true) {
                                    ls.cm_address = cm_address.slice(null, -2).join('_');
                                } else {
                                    null;
                                }

                            } catch (e) {
                                msg(e);
                                Error(e);
                            }
                            $.beta.render(false, atc[pos - 2], pos - 1);
                            ls.location--;
                        }

                    }
                    ;
                    store.forEach(function(a, b) {

                        $$$ = document.createElement('div');
                        $$$.id = 'course';
                        $$$.innerHTML = '<button tabindex="' + b + '">' + a + '</button>';

                        document.querySelector('#mainBoard').append($$$);
                        $$$.onclick = function() {
                            ls.setItem('__currActive', active);
                            $.beta.render(false, a, pos + 1);
                            ls.location++;
                        }
                        delete $$$;
                        delete $$$$;
                    });
                }
                ;

            }
            ;

        }
    },
    'launchApp': function() {
        if ($.auth.check() == 'usr_verified_true') {
            var appName;
            document.title = "CosmicMath";
            document.oncontextmenu = function() {
                return false
            }
            elmt = document.createElement('meta');
            elmt.name = 'description';
            elmt.content = 'CosmicMath, a math practicing platform created by Reetabrata Bhandari.';
            elmt101 = document.head.append(elmt);
            a = document.querySelector('body');
            elmt = '<div title="CosmicMath" id="app" style=""><span style=" margin: auto; ">CosmicMath</span><svg onclick="CosmicMath.launchApp()" class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style=" width: 35px; fill: #ffffffdb; margin: auto; margin-left: 12px; "><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path></svg></div><span id="appName">' + appName + '</span> <span id="appName1">' + ls.getItem('name') + '</span>';
            el = document.createElement('div');
            el.innerHTML = elmt;
            a.innerHTML = '<span id="mainBoard"> </span>';
            a.append(el);
            option = document.querySelector('#course > button');

            $.beta.render(true);

            app100 = document.querySelector('#app')
            app100.addEventListener('dblclick', function() {
                $.infoPanel(1, 'CosmicMath', 'Introducing the ultimate CosmicMath app which will help you build lightning-fast calculation speed and internalize mathematical concepts. <br><br>CosmicMath algorithmically-generates unlimited sums for you to practice regularly and familiarize yourself with numbers and master mathematics. It improves your meta-skills such as calculation speed and builds mathematical intuition.<br><br>The CosmicMath interface has been designed with utmost care for you, priortizing immersive experience and responsiveness. You will find it easier to focus with this minimal and responsive user-interface.<br><br>Meet the Fluent Mode which enables you to solve sums fluently without spending much time for submitting. It automatically submits if you have entered the correct answer and lets you proceed to the next sum instantly.<br><br>Since the app is yet to reach a stable functional stage, often (hopefully rarely) the sum generates a wrong answer due to bugs in the algorithm - to fix this and ensure the app is generating correct answer I have created a shortcut to see the answer (to be used rarely when you have a doubt regarding the answer). To use this, type <code>jim.ans</code> in any of the input blanks and submit.<br><br>I would appreciate any feedback regarding the UI or queries regarding errors. This app is still under development.<br><br> - Developer [Reetabrata Bhandari] [ReetUI]');
            });
            eventlist = document.querySelector('#appName1').addEventListener('click', function() {
                ell = document.createElement('div');
                ell.innerHTML = `<div id="backdrop1" onclick="document.querySelector(&quot;#backdrop1&quot;).remove();document.querySelector(&quot;#sum_info1&quot;).remove();"></div><div id="sum_info1">    <div id="control-panel"> <h1 style="color: #1a237e9c;margin-inline: 1em;">Settings</h1> <div id="accset"> <span style="font-size: 3vh;font-family: 'InternacionalB';color: #000000d9;">Change your name</span><br><input value="${ls.name}" style="margin: 2em 0em;font-family: 'InternacionalR';text-align: center;width: 15em;height: 2.5em;font-size: 20px;padding: 0em 1em;border: none;background: #0000000f;border-radius: 10px;color: #000000ab;transition: 200ms;"><br> <br> <button id="btn" onclick="$.auth.logout();" style=" ">Logout</button><button id="saveCh" class="setBut" style=" ">Save changes and close</button> </div> </div> </div>`;
                a.append(ell);
                document.querySelector("#saveCh").addEventListener('click', function() {
                    ls.setItem('name', document.querySelector("#accset > input").value);
                    $.auth.check();
                    document.querySelector(`#backdrop1`).remove();
                    document.querySelector(`#sum_info1`).remove();
                    $.launchApp()
                });
            });

        } else {
            null;
        }
    },
    'infoPanel': function(type, title, text) {
        CosmicMath.auth.check();

        if (type == 0) {
            document.querySelector('#backdrop').parentElement.remove();
        } else if (type == 1) {
            k100 = document.createElement('div')
            k100.innerHTML = '<div id="backdrop" onclick="$.infoPanel(0)"></div><div id="sum_info"> <span class="h_info" style=" ">' + title + '</span> <br><br> <span class="p_info">' + text + '</span> <br> </div>'
            document.querySelector('body').append(k100);
            document.querySelector('#sum_info').removeEventListener('click', onclick);
        }
    },
    'msg': function(content) {
        if (document.querySelectorAll("#msg-wrapper").length != 0) {
            document.querySelector("#msg-wrapper").style.cssText = `opacity: 0!important`;
            document.querySelector("#msg-wrapper").remove();
        }
        d101 = document.createElement('div');
        d101.id = "msg-wrapper";
        d101.innerHTML = '<span id="msg" style="visibility: visible;"><span style="">' + content + '</span></span>';
        document.children[0].append(d101);

        d101.onclick = ()=>{
            document.querySelector("#msg-wrapper").style.cssText = `opacity: 0!important`;
            document.querySelector("#msg-wrapper").remove();
        }
        ;
        setTimeout(function() {
            try {
                document.querySelector("#msg-wrapper").style.cssText = `opacity: 0!important`;
                document.querySelector("#msg-wrapper").remove();
            } catch (e) {
                null;
            }

        }, 3000)
        delete d101;
    },

    'score': function(type) {
        CosmicMath.auth.check();

        if (type === 0) {
            if (document.querySelector('#sc') === null) {
                br1 = document.querySelector('#braincrunchmode');
                br01 = document.createElement('div');
                br01.style.width = 'fit-content';
                br01.style.height = 'fit-content';
                br01.style.margin = 'auto'
                br01.innerHTML = '<span id="sc" style=" display: block; width: fit-content; padding-block: 15px 10px; margin: auto; ">' + currentscore + '</span>';
                br1.append(br01);
                currentscore = 0
            }

        } else if (type === -1) {
            x = ls.getItem('wrong');
            ls.setItem('wrong', x++);
        } else if (type == 1) {}
    },
    'random': function(length, isTrue, ...exclude) {
        num = Math.random() * length;
        if (isTrue == true) {
            num = Math.round(num);
        } else {
            return num;
        }
        ;if (exclude.includes(num) === true) {
            return $.random(length, isTrue, ...exclude);
        } else {
            return num
        }
    },
    'appHelp': {
        'Home_Arithmetic_Divide': {
            'content': 'Enter you answer as the quotient first, followed by a comma (,) and then the remainder, without any space in between.<br><br> For example, if a certain sum has the answer: 2 as the quotient and 3 as the remainder, the required answer would be <code>2,3</code>.<br><br>'
        },
        'Home_Arithmetic_Squareroot': {
            'content': 'Enter your answer upto two decimal places. (e.g., <code>a.bc</code>)'
        },
        'Home_Arithmetic_Convert_Decimal': {
            'content': 'Enter your answer upto four decimal places. (e.g., <code>a.bcde</code>)'
        },
        'Home_Arithmetic_Convert_Percentage': {
            'content': 'Enter your answer upto one decimal place and omit the percentage sign. (e.g., <code>ab.c</code>)'
        },
        'Home_Percentages_Type1': {
            'content': 'Enter your answer upto two decimal places (e.g., <code>a.bc</code>)'
        },
        'Home_Percentages_Type2': {
            'content': 'Enter the negative value if the change is a reduction, and enter your answer rounded off to the nearest whole number without the % sign.'
        },
        'Home_Series_Arithmeticprogression': {
            'content': 'This is an arithmetic progression app. Here the <span><b style=" font-weight: 900; font-size: 47px; font-style: italic; font-family: georgia; ">T</b><b style=" font-size: 25px; font-weight: 400; ">n</b></span> represents the nth term of the series. Similarly, the <span><b style=" font-weight: 900; font-size: 47px; font-style: italic; font-family: georgia; ">S</b><b style=" font-size: 25px; font-weight: 400; ">n</b></span> represents the sum of the terms till the nth term of the series.<br><br>'
        },
        'Home_Trigonometry_Trigonometricratios': {
            'content': 'If your answer contains a root, enter it by replacing it with an asterisk (*). For example, if your answer is 2/√3, enter it as <code>2/*3</code>.<br><br>If your answer is infinity then enter <code>I</code>.<br><br>'
        },
        'Home_Algebra_Cubicexpressions_Cubicexpansion': {
            'content': 'Enter only the integer coefficients excluding the variables, each separated by a comma. (e.g.,if the expression is 2x³+3x²+4x+5 write <code>2,3,4,5</code>)'
        },
        'Home_Algebra_Quadraticequations': {
            'content': 'Enter the values of 𝑥 separated by a comma. (e.g., <code>2,-4</code>)'
        },
        'Home_Circletheorem_Sectors': {
            'content': 'The angle given is in radians, so there is likely to be decimal answers. Please give your answers to 1 decimal place, in case of a decimal answer.'
        },
        'Home_Arithmetic_Numbersystem': {
            'content': 'Convert the following base 10 number to the given base.'
        },
        'Home_Statistics_Binomialdistribution': {
            'content': 'Enter your answer upto two decimal places. (e.g., <code>a.bc</code>)'
        },
        'Home_Algebra_Cubicexpressions_Cubicfactorisation': {
            'content': 'Enter the roots in the format <code>(ax+b),(cx+d),(ex+f)</code>'
        }

    },
    'fluentMode': function(id, address) {
        CosmicMath.auth.check();
        ds = document.querySelector('#sc');
        ds.innerHTML = currentscore;
        r = document.querySelector('#response').addEventListener('keyup', function() {
            res = [];
            (document.querySelectorAll('#response').length < 1) ? document.querySelectorAll('#response').forEach((a)=>{
                res.push(a.value)
            }
            ) : res = (document.querySelector('#response').value);
            document.querySelector("#btn").click();
            ($0 === 'correct') ? (document.querySelector("#sc").innerHTML = currentscore++,
            $.createSum(id, address),
            $.fluentMode(id, address),
            document.querySelector('#response').focus()) : null;

        });
    },
    'submit': function(id, address, res, answer, isArray=false, actionRequired=true) {
        CosmicMath.auth.check();
        var tempArr = [];
        if (document.querySelectorAll("#response").length > 1) {
            document.querySelectorAll("#response").forEach((a)=>{
                tempArr.push(a.value);
            }
            );
        } else {
            tempArr.push(document.querySelector("#response").value);
        }
        if (tempArr.includes('jim.ans')) {
            console.log('SHOW ANSWER');
            $.msg("Revealed answer");
            try {
                (document.querySelectorAll("#response").length > 1) ? (document.querySelectorAll("#response").forEach((elm,k)=>{
                elm.value = (!(typeof answer === 'object') ? answer.split(',')[k] : answer[k])
            }
            )) : (document.querySelector("#response").value = answer);
            } catch(error) {
                $.msg(error);
            }
            delete tempArr;
        } else {
            ($_) ? actionRequired = false : null;
            var output;
            if (isArray === true) {
                !(typeof answer === 'object') ? answer = answer.split(',') : null;
                answer.forEach(function(m, n) {
                    answer[n] = parseFloat(m);
                });
                answer = answer.sort().join(',');
                !(typeof res === 'object') ? res = res.split(',') : null;
                res.forEach(function(m, n) {
                    res[n] = parseFloat(m);
                });
                res = res.sort().join(',');
                if (res === answer) {
                    (actionRequired) ? document.querySelector('#a100').innerHTML = `<div id="d100" class="correct"><span id="s100">Correct</span><button id="nxtBtn" onclick="CosmicMath.createSum('${id}','${address}')">Next</button></div>` : (output = 'correct');
                    document.querySelectorAll("#response").forEach((l)=>{
                        l.disabled = true
                    }
                    );
                } else
                    (actionRequired) ? document.querySelector('#a100').innerHTML = `<div id="d100" class="wrong"><span id="s100">Wrong</span><button id="nxtBtn" onclick="CosmicMath.createSum('${id}','${address}')">Next</button></div>` : (output = 'wrong');
            } else if (isArray === false) {
                if (parseFloat(res).toString() === parseFloat(answer).toString()) {
                    (actionRequired) ? (document.querySelector('#a100').innerHTML = `<div id="d100" class="correct"><span id="s100">Correct</span><button id="nxtBtn" onclick="CosmicMath.createSum('${id}','${address}')">Next</button></div>`,
                    document.querySelectorAll("#response").forEach((l)=>{
                        l.disabled = true
                    }
                    )) : (output = 'correct');
                } else
                    (actionRequired) ? document.querySelector('#a100').innerHTML = `<div id="d100" class="wrong"><span id="s100">Wrong</span><button id="nxtBtn" onclick="CosmicMath.createSum('${id}','${address}')">Next</button></div>` : (output = 'wrong');
            } else if (isArray === 'expression') {
                if ((res).toString() === (answer).toString()) {
                    (actionRequired) ? (document.querySelector('#a100').innerHTML = `<div id="d100" class="correct"><span id="s100">Correct</span><button id="nxtBtn" onclick="CosmicMath.createSum('${id}','${address}')">Next</button></div>`,
                    document.querySelectorAll("#response").forEach((l)=>{
                        l.disabled = true
                    }
                    )) : (output = 'correct');
                } else
                    (actionRequired) ? document.querySelector('#a100').innerHTML = `<div id="d100" class="wrong"><span id="s100">Wrong</span><button id="nxtBtn" onclick="CosmicMath.createSum('${id}','${address}')">Next</button></div>` : (output = 'wrong');
            }
            ;($_) ? $0 = output : null;
            return output;
        }
        ;

    },
    'err': [],
    'createSum': function(input, address) {
        CosmicMath.auth.check();
        if (document.querySelector("#appName1") === undefined) {
            console.log("All set!!");
        } else {
            try {
                document.querySelector("#appName1").remove();
            } catch (e) {
                null;
            }
        }

        !(document.querySelector('#braincrunchmode')) ? (fluentModeEl = document.createElement('div'),
        fluentModeEl.innerHTML = `<span title="Fluent Mode" onclick="$.score(0);CosmicMath.fluentMode('${input}', '${address}');$.msg('Fluent Mode is active');" id="braincrunchmode" style="visibility: visible;"><span style=" filter: contrast(0.01); ">⚡</span></span>`,
        document.querySelector('body').append(fluentModeEl)) : null;
        $_ = Boolean(document.querySelector('#sc'));
        var helpcontent;
        var addr = [];
        address.split('_').forEach((k)=>{
            if (k.split(' ').length >= 2) {
                k = k.split(' ').join('');
                addr.push(k);
            } else {
                addr.push(k);
            }
        }
        );
        console.log('App code : ' + input + '\nAddress: ' + addr.join('_'));
        if ($.appHelp[addr.join('_')] === undefined) {
            helpcontent = 'No help is provided.';
        } else {
            helpcontent = $.appHelp[addr.join('_')].content;
        }
        document.querySelector('#appName').innerHTML = input + `<div title="Show help and comments for the sum." style="margin:auto;width:fit-content;height:fit-content;"><svg viewBox="0 0 20 20" class="sumHelp"><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm0 10.5a.75.75 0 110 1.5.75.75 0 010-1.5zm0-8a2.5 2.5 0 011.65 4.38l-.15.12-.22.17-.09.07-.16.15c-.33.36-.53.85-.53 1.61a.5.5 0 01-1 0 3.2 3.2 0 011.16-2.62l.25-.19.12-.1A1.5 1.5 0 0010 6.5c-.83 0-1.5.67-1.5 1.5a.5.5 0 01-1 0A2.5 2.5 0 0110 5.5z"></path></svg></div>`;
        document.querySelector('#appName > div').setAttribute(`onclick`, `$.infoPanel(1,"${address.split('_').join(' > ')}","${helpcontent}")`);
        var appname = document.querySelector('#appName')
        appname.style.visibility = 'visible';
        try {
            a = document.querySelector('#mainBoard');
            a.innerHTML = `<div class="d212"><div id="appMain"></div><div id="a100"></div></div>`;
            var addr = [];
            address.split('_').forEach((k)=>{
                if (k.split(' ').length >= 2) {
                    k = k.split(' ').join('');
                    addr.push(k);
                } else {
                    addr.push(k);
                }
            }
            );
            eval(`$db.${addr.join('_')}.interface("${input}","${addr.join('_')}")`);
        } catch (err) {
            this.err.push(err);
            console.log(err);
            $.msg(err);
            (this.err.length >= 10) ? this.createSum(input, address) : $.msg("A fatal error has occured. Please retry again");
        }
        document.querySelector('#braincrunchmode').onclick = function() {
            $.score(0);
            $_ = true;
            try {
                $.fluentMode(input, address);
            } catch (e) {
                $.fluentMode(input, address);
            }

            $.msg(`Fluent Mode is active.`);
        }
        //delete fluentModeEl;
    },
    'round': function(num, limit) {
        var rounded = [];
        num = parseFloat(num).toString();
        number = num.split('');
        count = 0;
        isPoint = false;
        number.forEach((a)=>{
            b++;
            if (count <= limit) {
                if (a === 0 && isPoint === true) {
                    count++;
                    rounded.push(0);
                } else if (a != 0 && isPoint === false) {
                    count++;
                    rounded.push(a);
                } else if (a === '.') {
                    isPoint = true;
                    rounded.push('.');
                } else if (a != 0 && isPoint === true) {
                    count++;
                    if (count = limit) {}
                }
            }

        }
        )
    }
}

var $ = CosmicMath;
// isArray in flashmode not working
