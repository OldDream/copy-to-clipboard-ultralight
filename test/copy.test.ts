import ultralightCopy from '../src/index'
test('copy to string --- Source code', () => {
  const result: boolean = ultralightCopy('This is copy to string --- Source code')
  expect(result).toBe(true)
}) 