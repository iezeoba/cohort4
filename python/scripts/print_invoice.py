from build_dictionary import dictbuild

alldata = dictbuild()


def getInvoice(invoiceid):
    return alldata.get("Invoice").get(invoiceid)
    # return alldata['Invoice'][invoiceid]


# print(getInvoice(2))


def getCustomer(customerid):
    return alldata.get("Customer").get(customerid)


# print(getCustomer(1))


def getProduct(productid):
    return alldata.get("Product").get(productid)


# print(getProduct(1))


def getInvoiceList(invoiceid):
    invoicelist = alldata.get("Invoice_List")
    for val in invoicelist.values():
        if (val.get("invoice_id") == invoiceid):
            return val


# print(getInvoiceList(1))


def printReceipt(invoiceid):
    inv = getInvoice(invoiceid)
    customer = getCustomer(inv["customer_id"])
    invlist = getInvoiceList(invoiceid)
    products = getProduct(invlist["product_id"])
    return f"""
    Customer Name: {customer["firstname"]} {customer["lastname"]}
    Invoice No: {inv["invoice_number"]}
    Date of Invoice: {inv["invoice_date"]}
    Prepared By: {inv["prepared_by"]}
    Products: {products["product_name"]}
    Quantity: {invlist["quantity"]}
    Total Amount: {invlist["quantity"] * products["price"]}"""


# inv_id = input("enter invoice id: ")
# print(printReceipt(int(inv_id)))


def getAllInvoices(customerid):
    allInv = []
    for (key, val) in alldata["Invoice"].items():
        if val["customer_id"] == customerid:
            val.update([("invoice_id", key)])
            allInv.append(val)
    return allInv


# allIn = getAllInvoices(2)
# print(allIn)
# print(printReceipt(allIn[0]['invoice_id']))


y = getAllInvoices(2)
for x in y:
    inv_id = x["invoice_id"]
    print(printReceipt(inv_id))
