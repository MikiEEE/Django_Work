def getFirstNumber(random):
    return int(random/ 100)

def getSecondNumber(firstNumber, random):
    return int(random/10) - firstNumber * 10

def getThirdNumber(firstNumber, secondNumber, random):
    return random % ((firstNumber * 100 ) + (secondNumber * 10))

def checkForMatch(userInput, Numbers):
    match = False
    if(len(userInput) <= 3):
        for y in range(0,len(userInput)):
            if(int(userInput[y]) == Numbers[y]):
                match = True
    return match

def checkForClose(userInput, Numbers):
    close = False
    for x in userInput:
        for number in Numbers:
            if(int(x) == number):
                close = True
    return close

def Hint(userInput, Numbers):
    if(checkForMatch(userInput, Numbers)):
        print('Match!')
    elif(checkForClose(userInput, Numbers)):
        print('Close!')
    else:
        print('Nope')

def totalMatchCheck(random, userInput):
    if(random == int(userInput)):
        print('YOU GUESS CORRECT')
        print('I SUPPOSE IN HIND SIGHT A 3 DIGIT PIN WAS\'NT VERY SECURE')
        return True
    return False
