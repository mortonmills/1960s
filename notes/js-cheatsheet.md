# Javascript
## Values, Types, and Operators

| Data Types | Column2 | Column3 | Bits |
| ---------- | ------- | ------- | ---- |
| Number     |         |         | 64   |
| String     |         |         | 16   |
| Boolean    |         |         | ?    |
| Row4       |         |         |      |


```mermaid
flowchart TB

Data--->Values & Operator

Values--->Primitives

Primitives--->Numbers & Strings & Booleans

Numbers---> Integers & FloatingPoint & BigInt
Numbers----Infinity & -Infinity & NaN
Booleans---> True & False
```






| Operators       | Numbers | Strings    | Array                       |
| --------------- | ------- | ---------- | --------------------------- |
| add             | +       | +          | .push(), flat()             |
| subtract/remove | -       | .replace() | .pop(), unshift(), splice() |
| multiply        | *       | .repeat()  |                             |
| divide          | /       | .split()   |                             |

| Operators | Type   | Quantity | Column4 |
| --------- | ------ | -------- | ------- |
| +         | String | unary    |         |
| -         | Number | binary   |         |
| *         |        | ternary  |         |
| /         |        | binary   |         |




| Column1  | Empty Type     | Column3 | Column4 |
| -------- | -------------- | ------- | ------- |
| String   | ""             |         |         |
| Number   | 0              |         |         |
| Boolean  | false          |         |         |
| Array    | []             |         |         |
| Object   | {}             |         |         |
| none     | null/undefined |         |         |
| nonsense | NaN            |         |         |


```mermaid
flowchart TB

Data--->True & False & Empty & Nonsense

True--->Strings & Numbers & Booleans

False---> r[``] & 0 & false
Empty--->Null & Undefined
Nonsense--->NaN
```

