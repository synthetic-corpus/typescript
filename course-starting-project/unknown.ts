// This is different than simply using "any"
// Unknown won't assign to another variable until you *confirm* that it matches the type.
// Any won't enforce checking. It doesn't care.

let userAny: any;
let userInput: unknown;
let userName: string;

userInput = 5
userInput = "Henry"

// Will Work:

userAny = "Henry"
userName = userAny

// Won't Work

userName = userInput

// Will Work

if (typeof userInput === 'string'){
    userName = userInput;
}