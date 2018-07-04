describe("add test suite",()=>{
    it("should add two number",()=>{
        var a= 100;
        var b = 200;
        var result = add(a,b);
        expect(result).toBe(300);
    })
    it("should add one number",()=>{
        var a= 100;
       
        var result = add(a);
        expect(result).toBe(100);
    })
})