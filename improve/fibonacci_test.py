import time
import unittest
from fibonacci import fibonacci

class TestFibonacciSpeed(unittest.TestCase):
    def test_fibonacci_speed(self):
        test_cases = [0, 1, 5, 10, 20, 35]
        total_time = 0
        for n in test_cases:
            start_time = time.time()
            fibonacci(n)
            duration = time.time() - start_time
            total_time += duration
            print(f"Fibonacci({n}) took {duration:.6f} seconds")
        print(f"Total time for all test cases: {total_time:.6f} seconds")

if __name__ == '__main__':
    unittest.main()
