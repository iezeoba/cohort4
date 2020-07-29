print("Hello, World!")


def email(firstname, lastname):
    if len(firstname) == 0 or len(lastname) == 0:
        return ('please enter your first and last name')
    else:
        # print(firstname.lower() + lastname.lower() + '@evolveu.ca')
        # using f-string
        return (f"{firstname.lower()}{lastname.lower()}@evolveu.ca")


print(email(input("enter your firstname: "), input("enter your lastname: ")))
