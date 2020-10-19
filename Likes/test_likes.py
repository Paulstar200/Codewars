import unittest
import likes

class BaseTest(unittest.TestCase):
    def test_likes(self):
        self.assertEqual(likes.likes([]), 'no one likes this')
        self.assertEqual(likes.likes(['Peter']), 'Peter likes this')
        self.assertEqual(likes.likes(['Jacob', 'Alex']), 'Jacob and Alex like this')
        self.assertEqual(likes.likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this')


if __name__ == "__main__":
    unittest.main()

    