

const printArgs = () => {
  var args = [].slice.call(arguments);
  alert( args );
}

printArgs('Привет', 'мой', 'мир', {lengt: 2}); 
printArgs('Привет', 'мой', 'мир', {lengt: 2}); 
printArgs('Привет', 'мой', 'мир', {lengt: 2}); 


/* true + false
12 / "6"
"number" + 15 + 3
15 + 3 + "number"
[1] > null
"foo" + + "bar"
'true' == true
false == 'false'
null == ''
!!"false" == !!"true"
[‘x’] == ‘x’
[] + null + 1
0 || "0" && {}
[1,2,3] == [1,2,3]
{}+[]+{}+[1]
!+[]+[]+![]
new Date(0) - 0
new Date(0) + 0

 */