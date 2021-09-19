function recursion(n)
{
    if(n == 1)
    {
        return 1;
    }
    return n * recursion(n-1);
}
var facto = recursion(4);
console.log(facto);