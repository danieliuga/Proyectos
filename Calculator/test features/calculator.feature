Feature: Calculator

Background:
Given a user opens the app
@test1
Scenario: Default display screen
Then the display should show the following value: "0"
@test1
Scenario Outline: Pressing non-operators screen buttons
Given the user writes the following value: "<displayNumber>"
When the user presses the "<button>" button
Then the display should show the following value: "<displayResult>"

Examples:
| displayNumber | button | displayResult |
|             1 |      0 |            10 |
|             0 |      1 |             1 |
|             0 |      2 |             2 |
|             0 |      3 |             3 |
|             0 |      4 |             4 |
|             0 |      5 |             5 |
|             0 |      6 |             6 |
|             0 |      7 |             7 |
|             0 |      8 |             8 |
|             0 |      9 |             9 |
|             0 |      , |            0, |
|             1 |      C |             0 |
|             1 |     +- |            -1 |
|            -1 |     +- |             1 |

@test2
Scenario Outline: Pressing non-operators keys
Given the user writes the following value: "<displayNumber>"
When the user presses the "<key>" key
Then the display should show the following value: "<displayResult>"

Examples:
| displayNumber |        key | displayResult |
|             1 |          0 |            10 |
|             0 |          1 |             1 |
|             0 |          2 |             2 |
|             0 |          3 |             3 |
|             0 |          4 |             4 |
|             0 |          5 |             5 |
|             0 |          6 |             6 |
|             0 |          7 |             7 |
|             0 |          8 |             8 |
|             0 |          9 |             9 |
|             0 |          , |            0, |
|             1 |     Escape |             0 |
|             1 |    Control |            -1 |
|            -1 |    Control |             1 |
