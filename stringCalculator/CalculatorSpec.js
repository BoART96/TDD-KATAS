describe("StringCalculator", () => {
  let stringCalculator; 
  beforeEach(() => {
    stringCalculator = new StringCalculator()
  });

  describe("Calculations", () =>{
    it('should return 0 if the method is not given any arguments', () =>{
      expect(stringCalculator.calculate()).toBe(0)
    });

    it('should return value if one argument is given', () =>{
      stringCalculator.calculate("1")
      expect(stringCalculator.numbers).toEqual([1])
    });

    it('should return value if two argument is given', () =>{
      stringCalculator.calculate("1","2")
      expect(stringCalculator.numbers).toEqual([1,2])
    });

  });

  describe("the total", () =>{
    it('should sum a random amount of arguments', () =>{
      randomArray = (length, max) => [...new Array(length)]
      .map(() => Math.round(Math.random() * max));
      range = Math.floor((Math.random() * 100) + 1);
      res = randomArray(range,range);
      sum = res.reduce((pv, cv) => pv+cv, 0);
      expect(stringCalculator.checker(res)).toEqual(sum)
    });

    it('should sum numbers in array', () =>{
      expect(stringCalculator.checker([1,2])).toEqual(3)
    });

    it('should eliminate spaces when adding the array ', () =>{
      expect(stringCalculator.checker([1,'\n',2])).toEqual(3)
    });

    it('should stop working when there is a negative function ', () =>{
      expect(stringCalculator.checker([1,'\n',-2])).toBe('User, no negative numbers')
    });

    it('should ignore numbers more than a 1000', () =>{
      expect(stringCalculator.checker([1,1001])).toEqual(1)
    });

    it("should allow multiple delimiters like this “//[*][%]\n1*2%3”", ()=>{
      expect(stringCalculator.checker(['/','/','[','*',']','[','%',']','\n',1,'*',2,'%',3])).toEqual(6);
    });

    it("make sure you can also handle multiple delimiters", () =>{
      expect(stringCalculator.checker(['/','/','[','*',']','[','%',']','\n',1,'*',2,'%',3,'/','/','['])).toEqual(6)
    })
  });
});