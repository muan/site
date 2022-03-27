---
layout: default
title: Hacking with Swift
date: 2021-02-27
permalink: /pages/hacking-with-swift/
image_text: |
  :red_apple::telephone:
  Hacking with Swift
---

Trying out [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui). This would probably be my 5th attempt for learning iOS/macOS development. 🤞 [Hopefully I keep this up](https://mobile.twitter.com/muanchiou/status/1302195083333206017).

## Day 10
2021/02/27

So, it's been half a year. I am back. Remember how confused I was by everything on Day 9? I decided it's time to get some help. I reached out to my friend [@dlackty](https://twitter.com/dlackty) and got him to give me a 2 hour crash course for iOS development. 

I feel a lot better now, even though I think I still can't be productive yet. Let me just write down the things we covered in the 2 hours.

- Xcode UI walk through.

- Difference between Swift UI and storyboard. Swift UI is cool and new, but 

   1. it won't work on ~iOS 12 (~ iPhone 6)
   2. there are cross version compatibility issues between iOS 13 and 14
   3. limited 3rd party libraries
   
  It might not be a good idea to use it as of yet. 

- You can also create UI by code, without the GUI, which is a popular approach. (Except, for the launch screen and the main screen, which you *have to* create with the GUI.)

- Think of `*Controller` files like HTML files, except you ignore best practices and write *everything* in the markup. People would obviously extract model code out, but the main point is— development _starts_ from the page markup. 

  ```html
  <script>function () dostuff { ... }</script>
  <nav>
    <tab-container ontabchange="...">
      <button onclick="dostuff();"></button>
    </tab-container>
  </nav>
  ```

- To build an app version of a Rails webapp, you will likely end up with the same number of `views/**/*.erb` for `*Controller.swift`.

- `npm` -> `cocoapods` v.s. `yarn`(cache) -> `carthage` 

- Core Data is for database, but you probably don't and shouldn't need it.

- Use _playground_ to REPL stuff because you can't be always compiling everything to test.

- `RxSwift` v.s. `combine`.

- For API needs, see `Alamofire` & Codable.

That's about everything. But first, I will have to review the stuff from before (9 days lol) and re-learn the Swift syntax. BRB.

## Day 9
2020/09/14

- Day 16 – Project 1, part one

I didn't open my laptop at all for the weekend. ✌️ Hopefully I still remember how things work.

It did seem like I managed to build some UI, but I totally got turned around. The `Picker` example in the demo code doesn't work, and turns out it was because [SwiftUI expects the containing view to be inside a `NavigationView`](https://www.hackingwithswift.com/quick-start/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable). But why? and why didn't Xcode tell me this? And why is this the case—

> Closure containing control flow statement cannot be used with function builder 'ViewBuilder'

Why can I only use the language's forloop syntax in some cases and not all? why is `ForEach` different/significant? and why is `PreviewProvider` code a thing? I know what it's for but it seems weird that it's code that _lives in your feature code_ solely meant for the IDE.

I don't want to simply accept and memorize these. I want to understand them. `:old_man_yells_at_cloud:` I stopped at this point for the day.

On the plus side though, this time I was indeed less overwhelmed by Xcode.

## Day 8
2020/09/10

- Day 15 – Swift review, day three

Nothing new. Gonna save day 16 for tomorrow since that's when I'll have to start to use Xcode.

## Day 7
2020/09/09

- Day 13 – Swift review, day one
- Day 14 – Swift review, day two

I went through the topics through tests, and noticed that I missed `fallthrough` completely the first time around, probably because there wasn't a code example for it.. so here's [the official doc for `fallthrough`](https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID140). I like this a lot more for the explicitness.


## Day 6
2020/09/08

- Day 12 – optionals, unwrapping, and typecasting

🤔🤔 **Unwrapping** 🤔🤔
Why create another variable just to check if a variable held value? 
Why is `func foo (number: Number?) { guard let number = number else { ... } }` OK? Is variable shadowing not a thing?

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
