import pytest
import exerciseio


def test_numberoflines():
    assert exerciseio.getNumberOfLines("../testing.txt") == 8
    assert exerciseio.getNumberOfLines("../testing.txt") != 18


def test_numberOfElseStatements():
    assert exerciseio.numberOfElseStatements("else", "../testing.txt") == 2
