const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
    
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const result = utils.trimProperties(input)
    expect(input).not.toBe(result)

  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  /test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    let result = utils.trimPropertiesMutation(input)
    expect(result).toBe(input)
  })

})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const actual = utils.findLargestInteger(input)
    expect(actual).toBe(3)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    counter.countDown()
    expect(counter.num).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    counter.countDown()
    expect(counter.num).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for(let i = 0; i < 6; i++){
      counter.countDown()
    }

    expect(counter.num).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    let expected = 'summer'
    seasons.next()
    expect(seasons.season).toBe(expected)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let expected = 'fall'
    seasons.next()
    seasons.next()
    expect(seasons.season).toBe(expected)
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let expected = 'winter'
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.season).toBe(expected)
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let expected = 'spring'
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.season).toBe(expected)
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let expected = 'summer'
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.season).toBe(expected)
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let expected = 'spring'
    for(let i = 0; i < 40; i++){
      seasons.next()
    }
    expect(seasons.season).toBe(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(100)
    expect(focus.odometer).toEqual(100)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(120)
    expect(focus.tank).toEqual(16)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    expect(focus.tank).toEqual(0)
    expect(focus.drive(100)).toEqual('out of gas')
    expect(focus.odometer).toEqual(600)
    focus.refuel(20)
    focus.drive(120)
    expect(focus.odometer).toEqual(720)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    
    expect(focus.refuel(5)).toEqual('too much gas')
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const result = await utils.isEvenNumberAsync(4)
    expect(result).toEqual(true)
  })
   
  test('[20] resolves false if passed an odd number', async () => {
    const result = await utils.isEvenNumberAsync(5)
    expect(result).toEqual(false)
  })
})
