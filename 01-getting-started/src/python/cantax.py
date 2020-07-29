print("")
print("*************** Canadian Tax Calculator ***************")
print("")


def calc_Tax(taxableIncome):
    result = []
    if taxableIncome == "" or taxableIncome.isdigit() == False:
        # return
        raise ValueError()
    elif taxableIncome.isdigit() == True:
        print("Calculating ...")
        b1, b2, b3, b4 = 48535, 48534, 53404, 63895
        if float(taxableIncome) < b1:
            income = first_bracket(taxableIncome)
            print(
                f"On total income CA${taxableIncome}: Your tax is CA${income} and have an income of CA${float(taxableIncome)-income}")
            return income
            # print(
            #     f"With total income of $CAD {taxableIncome}, your tax bracket is 15% ~ $CAD {income} and have an income of $CAD {float(taxableIncome)-income}")
        if float(taxableIncome) > b1 and float(taxableIncome) <= 97069:
            income_b1 = first_bracket(b1)
            income_b2 = second_bracket(float(taxableIncome) - b1)
            print(
                f"On total income CA${taxableIncome}: Your tax is CA${income_b1+income_b2} and have an income of CA$ {float(taxableIncome)-(income_b1+income_b2)}")
            return income_b1+income_b2
            # print(
            #     f"On total income CA${taxableIncome}, your tax brackets are 15% on CA$ {b1} ~ CA${income_b1} | 20.5% on CA${float(taxableIncome) - b1} ~ CA${income_b2} and have an income of CA${float(taxableIncome)-(income_b1+income_b2)}")
        if float(taxableIncome) > 97069 and float(taxableIncome) <= 150473:
            income_b1 = first_bracket(b1)
            income_b2 = second_bracket(b2)
            income_b3 = third_bracket(float(taxableIncome) - 97069)
            print(
                f"On total income CA${taxableIncome}: Your tax is CA${income_b1+income_b2+income_b3} and have an income of CA$ {float(taxableIncome)-(income_b1+income_b2+income_b3)}")
            return income_b1+income_b2+income_b3
            # print(
            #     f"On total income CA${taxableIncome}, your tax brackets are 15% on CA${b1} ~ CA${income_b1} | 20.5% on CA$ {b2} ~ CA${income_b2} | 26% on CA${float(taxableIncome) -97069} ~ CA${income_b3} and have an income of CA${float(taxableIncome)-(income_b1+income_b2+income_b3)}")
        if float(taxableIncome) > 150473 and float(taxableIncome) <= 214368:
            income_b1 = first_bracket(b1)
            income_b2 = second_bracket(b2)
            income_b3 = third_bracket(b3)
            income_b4 = fourth_bracket(float(taxableIncome) - 150473)
            print(
                f"On total income CA${taxableIncome}: Your tax is CA${income_b1+income_b2+income_b3+income_b4} and have an income of CA${float(taxableIncome)-(income_b1+income_b2+income_b3+income_b4)}")
            return income_b1+income_b2+income_b3+income_b4
            # print(
            #     f"On total income CA${taxableIncome}, your tax brackets are 15% on CA${b1} ~ CA${income_b1} | 20.5% on CA${b2} ~ CA${income_b2} | 26% on CA${b3} ~ CA${income_b3} | 29% on CA${float(taxableIncome) -150473} ~ CA${income_b4} and have an income of CA${float(taxableIncome)-(income_b1+income_b2+income_b3+income_b4)}")
        if float(taxableIncome) > 214368:
            income_b1 = first_bracket(b1)
            income_b2 = second_bracket(b2)
            income_b3 = third_bracket(b3)
            income_b4 = fourth_bracket(b4)
            income_b5 = fifth_bracket(float(taxableIncome) - 214368)
            print(
                f"On total income CA${taxableIncome}: Your tax is CA${income_b1+income_b2+income_b3+income_b4+income_b5} and have an income of CA${float(taxableIncome)-(income_b1+income_b2+income_b3+income_b4+income_b5)}")
            return income_b1+income_b2+income_b3+income_b4+income_b5
            # print(
            #     f"On total income CA${taxableIncome}, your tax brackets are 15% on CA${b1} ~ CA${income_b1} | 20.5% on CA${b2} ~ CA${income_b2} | 26% on CA${b3} ~ CA${income_b3} | 29% on CA${b4} ~ CA${income_b4} | 33% on CA${float(taxableIncome) -214368} ~ CA${income_b5} and have an income of CA${float(taxableIncome)-(income_b1+income_b2+income_b3+income_b4+income_b5)}")


def first_bracket(num):
    return (float(num) * 15)/100


def second_bracket(num):
    return (float(num) * 20.5)/100


def third_bracket(num):
    return (float(num) * 26)/100


def fourth_bracket(num):
    return (float(num) * 29)/100


def fifth_bracket(num):
    return (float(num) * 33)/100


# TODO
if __name__ == "__main__":
    try:
        # total_income = input('Enter total income: CA$ ')
        calc_Tax(total_income := input('Enter total income: CA$ '))
    except ValueError as e:
        print(f"'{total_income}' is not a valid number")

print("")
print("*************** End of Assessment ********************")
