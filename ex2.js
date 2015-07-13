var args = process.argv;

var argsArrayLength = args.length;

var sum = 0;
for (var i=2;i<argsArrayLength;i++)
{
  var num = new Number(args[i]);
  if(!Number.isNaN(num))
  {
  	sum = sum + num;
  }

}

console.log(sum);
