"""
Usually when you buy something, you're asked whether your credit card number,
phone number or answer to your most secret question is still correct.
However, since someone could look over your shoulder, you don't want
that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'

Examples

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

# "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"

"""

# return masked string

# Space Complexity - O(n)^2
# Time Complexity - O(n)^2
def maskify(cc):
    if len(cc) == 0:
        return ''
    if len(cc) < 4:
        return cc
    
    count = 0
    new_list = []
    while count < 4:
        new_list += cc[-1]
        cc = cc[:-1]
        count += 1
    
    new_string = ""
    i = 0
    while i < len(cc):
        new_string += '#'
        i += 1
        
    for i in range(len(new_list)):
        item = new_list.pop()
        new_string += item
    return new_string

print(maskify('pauldreamer'))