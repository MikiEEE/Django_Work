#####################################
#### PART 9: FUNCTION EXERCISES #####
#####################################



#####################
## -- PROBLEM 1 -- ##
#####################

# Given a list of integers, return True if the sequence of numbers 1, 2, 3
# appears in the list somewhere.

# For example:

# arrayCheck([1, 1, 2, 3, 1]) → True
# arrayCheck([1, 1, 2, 4, 1]) → False
# arrayCheck([1, 1, 2, 1, 2, 3]) → True
def arrayCheck(nums):
    count = 0
    largest_in_sequence = 3
    for x in nums[2::]:
        if x == largest_in_sequence:
            for i in range(1,largest_in_sequence):
                if nums[x - i] == x - i:
                    count+= 1
                    if count == largest_in_sequence - 1:
                        print(True)
                        return True
    print(False)
    return False

arrayCheck([1, 1, 2, 3, 1])
#####################
## -- PROBLEM 2 -- ##
#####################

# Given a string, return a new string made of every other character starting
# with the first, so "Hello" yields "Hlo".
#
# For example:
#
# stringBits('Hello') → 'Hlo'
# stringBits('Hi') → 'H'
# stringBits('Heeololeo') → 'Hello'

def stringBits(str):
    newstr = ''
    for x in str[::2]:
        newstr += x
    return(newstr)

print(stringBits('Hi'))
#####################
## -- PROBLEM 3 -- ##
#####################
#
# Given two strings, return True if either of the strings appears at the very end
# of the other string, ignoring upper/lower case differences (in other words, the
# computation should not be "case sensitive").
#
# Note: s.lower() returns the lowercase version of a string.
#
# Examples:
#
# end_other('Hiabc', 'abc') → True
# end_other('AbC', 'HiaBc') → True
# end_other('abc', 'abXabc') → True


def end_other(a, b):
    a = a.lower()
    b = b.lower()
    startingPoint = len(a) - len(b)
    increment = 0
    counter = 0
    if(len(b) > len(a)):
        return False
    for x in range(startingPoint,len(a)):
        if a[x] == b[counter]:
            increment += 1
            counter += 1
        if increment < counter:
            return False
        elif increment == len(b) - 1:
            return True
    return False

print(end_other('adbc', 'abc'))


#####################
## -- PROBLEM 4 -- ##
#####################

# Given a string, return a string where for every char in the original,
# there are two chars.

# doubleChar('The') → 'TThhee'
# doubleChar('AAbb') → 'AAAAbbbb'
# doubleChar('Hi-There') → 'HHii--TThheerree'

def doubleChar(str):
    newstr = ''
    for x in str:
        for y in range(0,2):
            newstr += x
    return newstr

print(doubleChar('Hi-There'))

#####################
## -- PROBLEM 5 -- ##
#####################

# Read this problem statement carefully!

# Given 3 int values, a b c, return their sum. However, if any of the values is a
# teen -- in the range 13-19 inclusive -- then that value counts as 0, except 15
# and 16 do not count as a teens. Write a separate helper "def fix_teen(n):"that
# takes in an int value and returns that value fixed for the teen rule.
#
# In this way, you avoid repeating the teen code 3 times (i.e. "decomposition").
# Define the helper below and at the same indent level as the main no_teen_sum().
# Again, you will have two functions for this problem!
#
# Examples:
#
# no_teen_sum(1, 2, 3) → 6
# no_teen_sum(2, 13, 1) → 3
# no_teen_sum(2, 1, 14) → 3

def no_teen_sum(a, b, c):
    list = [a, b , c]
    sumOfTeens = 0
    for x in list:
        sumOfTeens += fix_teen(x)
    return sumOfTeens

def fix_teen(n):
    if(n == 15 or n == 16):
        return n
    elif(n > 12 and n < 19):
        return 0
    elif(type(n) == type(10)):
        return n
    else:
        print('Error')
        return 'Error'

print(no_teen_sum(2,1,14))


#####################
## -- PROBLEM 6 -- ##
#####################

# Return the number of even integers in the given array.
#
# Examples:
#
# count_evens([2, 1, 2, 3, 4]) → 3
# count_evens([2, 2, 0]) → 3
# count_evens([1, 3, 5]) → 0

def count_evens(nums):
    count = 0
    for x in nums:
        if(x%2 == 0):
            count +=1
    return count

print(count_evens([2,1,2,3,4]))
