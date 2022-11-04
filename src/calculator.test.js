const mathOps = require('./calculator.js')

describe("calculator tests",()=>{

    test("add 2 numbers",()=>{
        const val=mathOps.mathOperations.sum(3,4)
        expect(val).toBe(7)
    })
    
    test("add 2 numbers to get  response",()=>{
        const val=mathOps.mathOperations.minus(4,2)
        expect(val).toBe(2)
    })
    
    
    test("divide 2 numbers to get response",()=>{
        const val=mathOps.mathOperations.divide(6,2)
        expect(val).toBe(3)
    })
    
    test("multiply 2 numbers to get response",()=>{
        // const val=mathOps.multiply(6,2)
        // expect(val).toBe(12)
        expect(mathOps.mathOperations.multiply(3,5)).toBe(15)
    })
     test("number matchers",()=>{
        const val=mathOps.mathOperations.sum(2,3)
        expect(val).toBeLessThan(10)
        expect(val).toBeGreaterThan(2)
        expect(val).toBeLessThanOrEqual(5)
        expect(val).toBeGreaterThanOrEqual(5)
     })   
     test("string matchers",()=>{
        const val="software testing help"
        expect(val).toMatch(/test/)
     })
     test("exception matcher",()=>{
        expect(mathOps.throwException).toThrow()
        expect(mathOps.throwException).toThrowError()
        expect(mathOps.throwException).toThrowError("exception")
     })

    })



