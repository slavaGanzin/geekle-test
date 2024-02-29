# Description
tennis.js has an ugly implementation of tennis scoring.

Run test with:
```bash
$ npx jest --watchAll=false

# (Use `node --trace-deprecation ...` to show where the warning was created)
#  PASS  ./tennis.test.js
#   getScore
#     ✓ when the points are 0:0 is Love-All (3 ms)
#     ✓ when the points are 1:1 is Fifteen-All
#     ✓ when the points are 2:2 is Thirty-All
#     ✓ when the points are 3:3 is Deuce (1 ms)
#     ✓ when the points are 4:4 is Deuce
#     ✓ when the points are 1:0 is Fifteen-Love
#     ✓ when the points are 0:1 is Love-Fifteen
#     ✓ when the points are 2:0 is Thirty-Love
#     ✓ when the points are 0:2 is Love-Thirty
#     ✓ when the points are 3:0 is Forty-Love (4 ms)
#     ✓ when the points are 0:3 is Love-Forty
#     ✓ when the points are 4:0 is Win for player1
#     ✓ when the points are 0:4 is Win for player2
#     ✓ when the points are 2:1 is Thirty-Fifteen (1 ms)
#     ✓ when the points are 1:2 is Fifteen-Thirty
#     ✓ when the points are 3:1 is Forty-Fifteen
#     ✓ when the points are 1:3 is Fifteen-Forty
#     ✓ when the points are 4:1 is Win for player1
#     ✓ when the points are 1:4 is Win for player2
#     ✓ when the points are 3:2 is Forty-Thirty
#     ✓ when the points are 2:3 is Thirty-Forty
#     ✓ when the points are 4:2 is Win for player1
#     ✓ when the points are 2:4 is Win for player2 (1 ms)
#     ✓ when the points are 4:3 is Advantage player1
#     ✓ when the points are 3:4 is Advantage player2
#     ✓ when the points are 5:4 is Advantage player1
#     ✓ when the points are 4:5 is Advantage player2
#     ✓ when the points are 15:14 is Advantage player1
#     ✓ when the points are 14:15 is Advantage player2
#     ✓ when the points are 6:4 is Win for player1
#     ✓ when the points are 4:6 is Win for player2
#     ✓ when the points are 16:14 is Win for player1
#     ✓ when the points are 14:16 is Win for player2 (1 ms)

# Test Suites: 1 passed, 1 total
# Tests:       33 passed, 33 total
# Snapshots:   0 total
# Time:        0.816 s
# Ran all test suites.

```

# Task
1. Ask code helper to refactor code in single file
2. Ask code helper to refactor code and separate some logic to helpers.js

All tests should pass after refactoring