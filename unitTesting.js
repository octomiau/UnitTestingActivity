import greet from './greetings';

describe('MIT', () => {

    test('test greet()', function() => {

        it('should be called', function (){
            expect(greet('Elizabeth')).toBeCalled();
        });
    });

    it('should greet a name', function(){
        expect(greet('Elizabeth')).toEqual('Hello, Elizabeth');
    });

    it('should handle null values', function(){
        expect(greet()).toEqual('Hello, there!');
    });

    it(' should add a shouting', function(){
        expect(greet('JOSE')).toEqual('HELLO, JOSE!');
    });

    it(' should handle two names as input', function(){
        expect(greet(['Jose','Pep'])).toEqual('Hello, Jose, Pep');
    });

    it(' should handle an arbitrary number of names', function(){
        expect(greet(['Alex','Arsene','Jose','Zidane'])).toEqual('Hello, Alex, Arsene, Jose, Zidane');
    });

});