const functionWithPrivateMethod = (function(){
    const privateMethod = () => console.log(`Private method`);

    return {
        publicMethodWithPrivateMethod: function(){
            privateMethod();
            console.log(`First public method`);
        },
        publicMethod: function(){
            console.log(`Second public method`);
        }
    }
})();

functionWithPrivateMethod.publicMethodWithPrivateMethod();
functionWithPrivateMethod.publicMethod();
functionWithPrivateMethod.privateMethod();