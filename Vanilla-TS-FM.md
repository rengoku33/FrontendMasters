# DSA
<img width="1130" height="710" alt="image" src="https://github.com/user-attachments/assets/3c91ec8f-0bed-4abf-b68c-02d32e88a0bd" />


# Theory
## Higher order and callback fns
- A fn that accepts one or more functions as arguments or returns a fn is a HOF
- A fn that is passed as an argument to another fn (executed by literally calling it)

## Arrow functions
another way of declaring functions... they are exactly the same as regular functions but with a few limitations:
- cannot be used as constructors
<img width="905" height="484" alt="image" src="https://github.com/user-attachments/assets/2e30808f-96ca-4f34-abd0-210416b87f36" />

- hoisting (V) - they are hoisted but not in a useful way
 
<img width="40%" alt="image" src="https://github.com/user-attachments/assets/f9d6fc14-4572-48d5-a227-dea2c4ebdada" />
<img width="47%" alt="image" src="https://github.com/user-attachments/assets/29b5c9f8-ec4a-445e-8433-0d424f2a7670" />

- cant access outer scope using this like regular methods

<img width="45%" alt="image" src="https://github.com/user-attachments/assets/94a125d5-218d-4050-83b1-253641232def" />

## closures
A nested function inside a function which has access to its outer fn's variables,  
also stores memory based on its instance   
<img width="42%" alt="image" src="https://github.com/user-attachments/assets/7861349e-8713-4d40-b02c-f05ecc8ee8e2" />
<img width="42%" alt="image" src="https://github.com/user-attachments/assets/2b541ec9-8d7e-4fdd-8f2c-414a47569cb5" />

## internal stack vs heap memory
**JavaScript doesn't let you directly control stack or heap memory** (managed by JavaScript engine (such as V8))
<img width="48%" alt="image" src="https://github.com/user-attachments/assets/db6f7cbe-3cb9-4c9d-b921-f442c0568f68" />
<img width="48%" alt="image" src="https://github.com/user-attachments/assets/09492cfe-0fc9-4b38-836d-4e3e130df2b2" />



## hoisting
Before the code is executed, JS scans declarations and sets up memory for them
| Declaration Type      | Hoisted?            | Accessible Before Declaration? |
| --------------------- | ------------------- | ------------------------------ |
| `function foo(){}`    | ✅ Fully             | ✅ Yes                          |
| `var x`               | ✅ Declaration only  | ✅ Yes (`undefined`)            |
| `let x`               | ✅                   | ❌ ReferenceError               |
| `const x`             | ✅                   | ❌ ReferenceError               |
| `const fn = () => {}` | Variable is hoisted | ❌ ReferenceError               |
| `var fn = () => {}`   | Variable is hoisted | ❌ TypeError (`undefined`)      |

The reason why referenceError occurs eventhough const and let are hoisted is due to "Temporal Dead Zone", basically a JS rule which prevents the call before declaration is seen (top down approach)
<img width="625" height="218" alt="image" src="https://github.com/user-attachments/assets/2ab8b436-b194-4c1f-b3e1-d1d1a8041042" />

## nullish coalescing operator 
<img width="48%" alt="image" src="https://github.com/user-attachments/assets/7c9013e1-c67d-4afd-b327-8cb36981d921" />
<img width="48%" alt="image" src="https://github.com/user-attachments/assets/42435b96-15a1-4d16-8720-046908f6cb76" />

# Math and type checks & coercions
## unary
const num = 300.00; +num // 300  
const num = 300.33; +num // 300.33  
// the zeroes in the end will be removed by unary, also returns NaN for char

## isInteger
Number.isInteger(num)  
<img width="260" height="108" alt="image" src="https://github.com/user-attachments/assets/53552626-fdd9-4064-b71a-6d86b77e3ba1" />
<img width="279" height="156" alt="image" src="https://github.com/user-attachments/assets/421261a9-bd96-464a-b211-f31debecc535" />

## typeof
| Operand Type | `typeof` Result | Notes |
| :--- | :--- | :--- |
| Number | `"number"` | Includes `NaN` and `Infinity` |
| String | `"string"` | Includes numeric strings |
| Boolean | `"boolean"` | |
| Undefined | `"undefined"` | Safe for undeclared variables |
| Function | `"function"` | |
| Object | `"object"` | Includes arrays, dates, regex |
| Array | `"object"` | Use `Array.isArray()` instead |
| Null | `"object"` | Historical bug; use `=== null` |
| BigInt | `"bigint"` | |
| Symbol | `"symbol"` | |

typeof null // object

## type coercion
when a user types in something in a form, we take it in as a string... when there is a math operator, JS automatically converts string -> number but if the string is invalid number like "3a" or something, we get NaN (except for "+")
"3" - 1  // 2  
"2a" - 1 // NaN // but "+" = "2a" + 1 // "2a1"
in this case we use parseInt and parseFloat
<img width="55%" alt="image" src="https://github.com/user-attachments/assets/6c830638-9abf-4d76-92bb-4ee3a0a37e32" />
<img width="33%" alt="image" src="https://github.com/user-attachments/assets/9a1908cc-0c3d-4180-b7b4-9ada05b05bd0" />  
the reasn why we use parseInt over Number / +unary is due to  
+"42abc" // NaN && parseInt("42abc") // 42 but parseInt doesnt take float values but unary considers as Number 

