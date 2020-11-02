import unittest
import human_readable

class BaseTest(unittest.TestCase):
    def test_human_readable(self):
        self.assertEqual(human_readable.human_readable_time(0), "00:00:00")
        self.assertEqual(human_readable.human_readable_time(5), "00:00:05")
        self.assertEqual(human_readable.human_readable_time(60), "00:01:00")
        self.assertEqual(human_readable.human_readable_time(86399), "23:59:59")
        self.assertEqual(human_readable.human_readable_time(359999), "99:59:59")
        self.assertEqual(human_readable.human_readable_time(-359999), "Error processing the input")

    
if __name__ == "__main__":
    unittest.main()
