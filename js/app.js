"use strict";

$(document).ready(function() {
            var calcScreen = $('#screen');
            var operator = $('span');
            var clear = $('#clear');
            var equals = $('#equals');

            operator.on('click', function() {
                if ($(this).text() === 'C' || $(this).text() === '=') {
                    clear.on('click', function() {
                        calcScreen.empty();
                        var answer = (calcScreen.text());
                        calcScreen.append(answer);
                    });
                } else {
                    calcScreen.append($(this).text());

                }

            });
            equals.on('click', function() {
                        try {
                            var answer = eval(calcScreen.text());
                            calcScreen.empty();
                            calcScreen.append(answer);
                            }
                            catch (e) {
                                calcScreen.empty();
                                calcScreen.append(ERROR);
                            }
                        });
});
