"""
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

"""

# Space complexity: O(n)^2
# Time complexity: O(n)
def xo(s):
    x_array = []
    o_array = []

    for i in s:
        if i.lower() == 'x':
            x_array.append(i)
        elif i.lower() == 'o':
            o_array.append(i)
        else:
            continue

    if len(x_array) != len(o_array):
        return False
    else:
        return True

# Space complexity: O(1)
# Time complexity: O(log(n))
def xo_2(s):
    return s.lower().count('x') == s.lower().count('o')

print(xo("zpzpzpp"))