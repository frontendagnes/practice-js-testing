import randomNumber from './app';

test("Equal One", () =>{
    expect(randomNumber(1,1)).toBe(1)
})


// describe('Equale One', () =>{
//     it('should input 1', () =>{
//         expect(randomNumber(1,1)).toBe(1)
//     })
// })