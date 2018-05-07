function zero(expr) { return operation(0, expr); }
function one(expr) { return operation(1, expr); }
function two(expr) { return operation(2, expr); }
function three(expr) { return operation(3, expr); }
function four(expr) {return operation(4, expr); }
function five(expr) { return operation(5, expr); }
function six(expr) { return operation(6, expr); }
function seven(expr) { return operation(7, expr); }
function eight(expr) { return operation(8, expr); }
function nine(expr) { return operation(9, expr); }

function plus(num) { return function(res) { return res + num; } }
function minus(num) { return function(res) { return res - num; } }
function times(num) { return function(res) { return res * num; } }
function dividedBy(num) { return function(res) { return res / num; } }

function operation(num, expr) { return (expr) ? expr.call(expr, num) : num; }
