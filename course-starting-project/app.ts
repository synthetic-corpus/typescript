// How does the "Never" function work?
// "Never" is specified instead of "void" for clarity. This function never returns anything. ever. Peroid.

function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code}
}

generateError('Hello this an error',500)