import pytest
from helloworld import email


def test_email():
    assert email("Larry", "Shumlich") == "larryshumlich@evolveu.ca"
    assert email("Heiko", "Peters") == "heikopeters@evolveu.ca"
    assert email("Larry", "Shumlich") != "lshumlich@evolveu.ca"
    assert email("Heiko", "Peters") != "heikop@evolveu.ca"
    assert email("", "") == "please enter your first and last name"
