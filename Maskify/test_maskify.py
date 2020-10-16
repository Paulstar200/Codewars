import unittest
import maskify

class BaseTest(unittest.TestCase):
    def test_maskify(self):
        self.assertEqual(maskify.maskify('pauldreamer'), '#######amer')
        self.assertEqual(maskify.maskify(''), '')
        self.assertEqual(maskify.maskify('pau'), 'pau')
        self.assertEqual(maskify.maskify('SF$SDfgsd2eA'), '########d2eA')
        self.assertEqual(maskify.maskify('4556364607935616'), '############5616')

    def test_maskify_2(self):
        self.assertEqual(maskify.maskify_2('4556364607935616'), '############5616')
        self.assertEqual(maskify.maskify_2('64607935616'), '#######5616')
        self.assertEqual(maskify.maskify_2('Skippy'), '##ippy')
        self.assertEqual(maskify.maskify_2(''), '')
        self.assertEqual(maskify.maskify_2('Nananananananananananananananana Batman!'), '####################################man!')


if __name__ == "__main__":
    unittest.main()