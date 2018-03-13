var fp = require('./fp');
var util = require('util');

if ( ! exports )
   var exports = [ ];

// Your solution for problem 1 must appear between this and matching
// end comment below

var searchList = function(ns, target) {
  var cps_searchList = function(ns, target, k) {
    if(fp.isNull(ns)){
      return [];
    }
    else if(fp.isEq(fp.hd(ns), target)){
      return k([target]);
    }
    else {
      return cps_searchList(fp.tl(ns), target, function(x){
        return k(fp.cons(fp.hd(ns), x));
      });
    }
  };

  return cps_searchList(ns, target, function(x) { return x; });
};


////////// End of code for problem 1 ////////////////////


// Your solution for problem 2 must appear between this and matching
// end comment below

var b2d = function (b) {
    if(fp.isNull(fp.tl(b))) {
		return fp.hd(b);
	}
	else {
		return fp.add(fp.hd(b), fp.mul(2, b2d(fp.tl(b))));
	}
};



// ////////// End of code for problem 2 ////////////////////
//
// Your solution for problem 3 must appear between this and matching
// end comment below

var b2d_cps = function (b) {
    var helper = function(b, k) {
		if(fp.isNull(fp.tl(b))) {
			return k(fp.hd(b));
		}
		else if(!fp.isMember(1, fp.tl(b))) {
			return "Leading Zeros are not allowed.";
		}
		else {
			return helper(fp.tl(b), function (x) {
				return k(fp.add(fp.hd(b), fp.mul(2, x)));
			});
		}
	};

	return helper(b,function(x) { return x; });
};

// ////////// End of code for problem 3 ////////////////////
//

////////// All test cases you add must be below this comment line

////////// Everything below this line will be stripped away when your
////////// submission is evaluated

console.log("Testing Problem 1");
console.log(searchList([1,2,3,4,5], 4, []));
console.log(searchList([1,2,3,4,5], 6, []));


console.log("Testing Problem 2");
console.log( b2d([0]) );
console.log( b2d([1]) );
console.log( b2d([0,1]) );
console.log( b2d([1,1]) );
console.log( b2d([0,0,1,1]) );
console.log( b2d([1,0,1,0,0,1,1]) );
console.log( b2d([1,0,1,0,0,0,0]) );

console.log("Testing Problem 3");
console.log( b2d_cps([0]) );
console.log( b2d_cps([0,0]) );
console.log( b2d_cps([0,0,0,0]) );
console.log( b2d_cps([1]) );
console.log( b2d_cps([1,0]) );
console.log( b2d_cps([0,1]) );
console.log( b2d_cps([1,1]) );
console.log( b2d_cps([0,0,1,1]) );
console.log( b2d_cps([1,0,1,0,0,1,1]) );
console.log( b2d_cps([1,0,1,0,0,0,0]) );
