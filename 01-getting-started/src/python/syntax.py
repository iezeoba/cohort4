# 1. define attributes / variables

# number
def isNumber(num):
    return type(num)

# string


def isString(str):
    return type(str)

# boolean


def isBoolean(param):
    return type(param)
# checks if parameter is a boolean

# array


def isList(list):
    myList = [1, 2, 3, 4, 5]
    return type(myList)
# checks if arr is an array

# dictionary / objects


def nameOfPerson(firstname, lastname):
    return firstname + " " + lastname

# undefined


def isUndefined(a):
    return type(a)

# 2.  sample if / else


def ifElseStatement(num):
    if num == 10:
        return True
    else:
        return False

# 3. functions
# parameters
# returns

# 4. arrays
# add to the front


def addToArrFront(val, myArray):
    myArray.insert(0, val)
    return myArray

# add to the end


def addToArrEnd(endArray, num):
    endArray.append(num)
    return endArray


# update values
def updateArr(theArray, num):
    theArray[0] = num
    return theArray

# 5. loops

# for


def myForLoop():
    myLoop = ['Dove', 'Magpie', 'Pigeon', 'Woodpecker']
    for bird in myLoop:
        print(bird)


# while
def myWhileLoop():
    i = 1
    while i < 6:
        print(i)
        i += 1

# 6. Objects / Dictionaries
# declare object


class Person:
    def __init__(self, firstname, lastname, age):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age


person1 = Person("Michael", "Fullstack", 25)

print(person1.firstname + '' + person1.lastname + '' + 'is' + person1.age)

# lookup key to retrieve value
students = {
    "student1": "Mark Wein",
    "student2": "David Chalk",
    "student3": "Ghassan Amir"
}
students["student3"]
