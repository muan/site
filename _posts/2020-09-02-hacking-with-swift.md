---
layout: default
date: 2020-09-03
title: Notes for Hacking with Swift
feature: 1
---

Trying out [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui). This would probably be my 5th attempt for learning iOS/macOS development. 🤞 [Hopefully I keep this up](https://mobile.twitter.com/muanchiou/status/1302195083333206017).

## Day 6
2020/09/08

- Day 12 – optionals, unwrapping, and typecasting

🤔🤔 **Unwrapping** 🤔🤔
Why create another variable just to check if a variable held value? 
Why is `func foo (number: Number?) { guard let number = number else { ... } }` OK?

Seems like `!` is never a good idea when the result is crashing. `try?` is cool though.

Without actually writing the code every day I don't feel like I'm memorizing the syntax. 

## Day 5
2020/09/07

- Day 10 – classes and inheritance
- Day 11 – protocols, extensions, and protocol extensions

🤔 I don't think I've ever wanted something like `final class`.

`protocols` are like type definitions? except you can define protocol extensions which would actually give objects that conforms to those protocol methods and vars? and extensions defaults can be overriden without `override`––Turns out this was explained in the next part, POP (11/5).

`extensions` with mutatability wasn't really explained but was tested. Specifically I thought `Int` being a class doesn't need the `mutating` keyword when being extended in order to perform mutation, but it did?!

I haven't watched any of the videos since they take much longer than reading.

## Day 4
2020/09/06

- Day 5 – functions, parameters, and errors (revisited)
- Day 8 – structs, properties, and methods
- Day 9 – access control, static properties, and laziness

Tests for property observers seem wrong. [The valid code samples](https://www.hackingwithswift.com/review/property-observers) have closures that don't return anything.

Now googling for Swift REPL so I can write some stuff to remember them better ➡ [Introduction to the Swift REPL](https://developer.apple.com/swift/blog/?id=18).

Turns out I missed a few chapters for Day 5, specifically everything after **7. variadic functions** 🤦🏻‍♀️ because variadic parameters were in the **access control** tests. I went back to read them today as well.

## Day 3
2020/09/05

- Day 5 – functions, parameters, and errors
- Day 6 – closures part one
- Day 7 – closures part two

Trailing closure syntax isn't confusing at all! Shorthand closure syntax isn't confusing at all!!

## Day 2
2020/09/04

- Day 3 – operators and conditions
- Day 4 – loops, loops, and more loops

`repeat { ... } while ...` is new to me.

## Day 1
2020/09/03

- Day 1 – variables, simple data types, and string interpolation
- Day 2 – arrays, dictionaries, sets, and enums

Sure `tuple` can exist.

<style>
  h2 + p { margin-top: -1.2em; font-size: .8em; }
  article ul { list-style: square; }
</style>
