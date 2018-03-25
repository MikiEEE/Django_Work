from random import randint

def getFirstNumber():
    return int(random/ 100)

def getSecondNumber(firstNumber):
    return int(random/10) - firstNumber * 10

def getThirdNumber(firstNumber, secondNumber):
    return random % ((firstNumber * 100 )+  (secondNumber * 10))

def checkForMatch(userInput):
    match = False
    for y in range(0,len(userInput)):
        if(int(userInput[y]) == Numbers[y]):
            match = True
    return match

def checkForClose(userInput):
    close = False
    for x in userInput:
        for number in Numbers:
            if(int(x) == number):
                close = True
    return close

def Hint(userInput):
    if(checkForMatch(userInput)):
        print('Match!')
    elif(checkForClose(userInput)):
        print('Close!')
    else:
        print('Nope')

def totalMatchCheck():
    if(random == int(userInput)):
        print('YOU GUESS CORRECT')
        print('I SUPPOSE IN HIND SIGHT A 3 DIGIT PIN WAS\'NT VERY SECURE')
        return True
    return False

random = randint(0,1000)
totalMatch = False
firstNumber = getFirstNumber()
secondNumber = getSecondNumber(firstNumber)
thirdNumber = getThirdNumber(firstNumber,secondNumber)
Numbers = [firstNumber,secondNumber,thirdNumber]

print("CODE BREAKER GAME")
print("TRY TO GUESS 3 DIGIT NUMBER")
while not totalMatch:
    userInput = input('What is your Guess? ')
    Hint(userInput)
    totalMatch = totalMatchCheck()
