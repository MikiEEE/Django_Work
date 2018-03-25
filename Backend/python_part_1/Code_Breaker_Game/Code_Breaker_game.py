from random import randint
import Code_Breaker_Library

def main():
    lib = Code_Breaker_Library
    random = randint(0,1000)
    totalMatch = False
    firstNumber = lib.getFirstNumber(random)
    secondNumber = lib.getSecondNumber(firstNumber, random)
    thirdNumber = lib.getThirdNumber(firstNumber,secondNumber, random)
    Numbers = [firstNumber,secondNumber,thirdNumber]

    print("CODE BREAKER GAME")
    print("TRY TO GUESS 3 DIGIT NUMBER")
    print("CLOSE: YOU'VE GUESSED A CORRECT NUMBER BUT IN THE WRONG POSITION.")
    print("MATCH: YOU'VE GUESSED A CORRECT NUMBER IN THE CORRECT POSITION")
    print("NOPE : YOU HAVEN'T GUESSED ANNY OF THE NUMBERS CORRECTLY")
    while not totalMatch:
        userInput = input('What is your Guess? ')
        lib.Hint(userInput, Numbers)
        totalMatch = lib.totalMatchCheck(random, userInput)
main()
