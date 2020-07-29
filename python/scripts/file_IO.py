import csv
import os
from pathlib import Path
from datetime import datetime

filepath = "./syntax.js"
dir_path = "C:/code/cohort4/python/"


def openFile(fp):
    file = open(fp, "r", encoding="utf-8")
    return file

# def getNumberOfLines():
#     linecount = 0
#     for line in file:
#         if line.isspace():
#             pass
#         else:
#             linecount += 1
#     return linecount


def getNumberOfLines(fpath):
    try:
        f = openFile(fpath)
        linecount = 0
        for line in f:
            if not line.isspace():
                linecount += 1
    finally:
        f.close()
        return linecount
    # The 'with' statement is considered the best way to close a file.
    # This ensures that the file is closed when the block inside the 'with' statement is exited.
    # That way we don't need to explicitly call the close() method. It is done internally.
    # e.g with open("test.txt", encoding = 'utf-8') as f:
    # perform file operations


# print(f"Number of lines in file is: {getNumberOfLines(filepath)}")


def numberOfElseStatements(txt, fpath):
    try:
        f = openFile(fpath)
        occurrence = 0
        for line in f:
            if not line.isspace():
                if txt in line:
                    occurrence += line.count(txt)
    finally:
        f.close()
        return occurrence


# print(f"Number of occurrence for else is: {numberOfElseStatements('else', filepath)}")


def numberOfCharacters(fpath):
    f = openFile(fpath)
    characters = len(f.read())
    f.close()
    return characters


# print(f"Number of characters is: {numberOfCharacters(filepath)}")


def convert_date(timestamp):
    d = datetime.utcfromtimestamp(timestamp)
    formated_date = d.strftime('%d %b %Y')
    return formated_date


def list_directory():
    # Method 1
    entry = Path(dir_path)
    for ent in entry.iterdir():
        # Just prints the time in digits
        print(f"{ent.name} | {ent.stat().st_mtime}")
        # Formats the date
        print(f"{ent.name}\t Last Modified:  {convert_date(ent.stat().st_mtime)}")
        print(f"{ent.name}\t Size:  {round(os.path.getsize(ent)/1000,2)}KB\t Last Modified:  {convert_date(ent.stat().st_mtime)} ")


# list_directory()


def readCSV():
    class_csv = {}
    sector_csv = {}
    totalLineCount = 0
    with open("../excel_folder/Census_by_Community_2018.csv", "r", encoding="utf-8") as csv_file:
        read = csv.DictReader(csv_file, delimiter=",")
        for row in read:
            if row.get("CLASS") in class_csv:
                class_csv[row.get("CLASS")] += float(row.get("RES_CNT"))
            else:
                class_csv[row.get("CLASS")] = float(row.get("RES_CNT"))

            if row.get("SECTOR") in sector_csv:
                sector_csv[row.get("SECTOR")] += float(row.get("RES_CNT"))
            else:
                sector_csv[row.get("SECTOR")] = float(row.get("RES_CNT"))

            totalLineCount += 1

    print(class_csv)
    print(sector_csv)
    print(totalLineCount)


readCSV()
