import unittest
import xo

class BaseTest(unittest.TestCase):

    def test_xo(self):
        self.assertEqual(xo.xo("ooxx"), True)
        self.assertEqual(xo.xo("xooxx"), False)
        self.assertEqual(xo.xo("ooxXm"), True)
        self.assertEqual(xo.xo("zpzpzpp"), True)
        self.assertEqual(xo.xo("zzoo"), False)


if __name__  == "__main__":
    unittest.main()