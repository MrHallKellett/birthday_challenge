from re import findall as r
from math import gcd as g
n="puzzleinput.txt"
with open(n)as f:a=r("\d+",f.read())
a=list(map(int,[i for i in a if i[-1]!='0']))
m=a[0]
a=[i for i in a[1:]if i<m]+[m]
d,n=sum(a),min(a)
print(d/g(n,d))



